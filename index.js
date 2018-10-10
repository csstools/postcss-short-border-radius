import postcss from 'postcss';

export default postcss.plugin('postcss-short-border-radius', opts => {
	const prefix = 'prefix' in Object(opts) ? `-${opts.prefix}-` : '';
	const skip = 'skip' in Object(opts) ? String(opts.skip) : '*';

	// border-radius selector pattern
	const borderRadiusPropertyRegExp = new RegExp(`^${prefix}border-(bottom|left|right|top)-radius$`);

	return root => {
		// walk each matching declaration
		root.walkDecls(borderRadiusPropertyRegExp, decl => {
			// border-radius properties
			const properties = propertiesBySide[decl.prop.match(borderRadiusPropertyRegExp)[1]];

			// spaced-separated values (top, right, bottom, left)
			const values = postcss.list.space(decl.value);

			// for each side property
			properties.forEach((side, index) => {
				// value of the current or first side
				const value = index in values ? values[index] : values[0];

				// if the value is not a skip token
				if (value !== skip) {
					// create a new declaration for the border-radius side property
					decl.cloneBefore({
						prop: side,
						value: value
					});
				}
			});

			// remove the original declaration
			decl.remove();
		});
	};
});

// border-radius properties by side
const propertiesBySide = {
	bottom: ['border-bottom-left-radius', 'border-bottom-right-radius'],
	left:   ['border-top-left-radius',    'border-bottom-left-radius'],
	right:  ['border-top-right-radius',   'border-bottom-right-radius'],
	top:    ['border-top-left-radius',    'border-top-right-radius']
};

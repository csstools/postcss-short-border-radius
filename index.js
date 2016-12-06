// tooling
const postcss = require('postcss');

// border-radius properties by side
const propertiesBySide = {
	bottom: ['border-bottom-left-radius', 'border-bottom-right-radius'],
	left:   ['border-top-left-radius',    'border-bottom-left-radius'],
	right:  ['border-top-right-radius',   'border-bottom-right-radius'],
	top:    ['border-top-left-radius',    'border-top-right-radius']
};

// plugin
module.exports = postcss.plugin('postcss-short-border-radius', ({
	prefix = '',
	skip   = '*'
}) => {
	// border-radius selector pattern
	const propertyMatch = new RegExp('^' + (prefix ? '-' + prefix + '-' : '') + 'border-(bottom|left|right|top)-radius$');

	return (css) => {
		// walk each matching declaration
		css.walkDecls(propertyMatch, (decl) => {
			// border-radius properties
			const properties = propertiesBySide[decl.prop.match(propertyMatch)[1]];

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
						prop:  side,
						value: value
					});
				}
			});

			// remove the original declaration
			decl.remove();
		});
	};
});

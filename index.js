var postcss = require('postcss');

module.exports = postcss.plugin('postcss-short-border-radius', function (opts) {
	var spacer = opts && opts.spacer ? opts.spacer : '*';
	var prefix = opts && opts.prefix ? '-' + opts.prefix + '-' : '';

	var props = {
		'border-bottom-radius': ['border-bottom-left-radius', 'border-bottom-right-radius'],
		'border-left-radius':   ['border-top-left-radius',    'border-bottom-left-radius'],
		'border-right-radius':  ['border-top-right-radius',   'border-bottom-right-radius'],
		'border-top-radius':    ['border-top-left-radius',    'border-top-right-radius']
	};

	return function (css) {
		css.walkDecls(new RegExp('^' + prefix + 'border-(bottom|left|right|top)-radius$'), function (decl) {
			var name = prefix ? decl.prop.slice(prefix.length) : decl.prop;
			var edge = postcss.list.space(decl.value);

			var prop = props[name];

			prop.forEach(function (property, index) {
				var value = index in edge ? edge[index] : edge[0];

				if (value !== spacer) {
					decl.cloneBefore({
						prop:  property,
						value: index in edge ? edge[index] : edge[0]
					});
				}
			});

			decl.remove();
		});
	};
});

# bun-plugin-istanbul

A Bun plugin to instrument your code for nyc/istanbul code coverage. In similar way as the Webpack Loader `istanbul-instrumenter-loader`. Only intended for use in development while running tests.

## Installation

`bun i -D bun-plugin-istanbul`

## API

```js
import bunPluginIstanbul from "bun-plugin-istanbul";
```

## Usage

```js
import bunPluginIstanbul from "bun-plugin-istanbul";

const jsPlugin = bunPluginIstanbul({
	filter: /\.[cm]?js$/,
	loader: "js",
	name: "istanbul-loader-js",
});

const jsxPlugin = bunPluginIstanbul({
	filter: /\.jsx$/,
	loader: "jsx",
	name: "istanbul-loader-jsx",
});

const tsPlugin = bunPluginIstanbul({
	filter: /\.[cm]?ts$/,
	loader: "ts",
	name: "istanbul-loader-ts",
});

const tsxPlugin = bunPluginIstanbul({
	filter: /\.tsx$/,
	loader: "tsx",
	name: "istanbul-loader-tsx",
});

await bun.build({
	plugins: [jsPlugin, jsxPlugin, tsPlugin, tsxPlugin],
});
```

## License

[MIT](./LICENSE)

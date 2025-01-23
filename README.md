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

## Example Repository

To better understand how to use `bun-plugin-istanbul` in a real-world scenario, refer to the example repository: [bun-react-playwright-coverage](https://github.com/hedaukartik/bun-react-playwright-coverage).

The repository demonstrates how to:

1. **Integrate `bun-plugin-istanbul` with a Bun project** to enable code instrumentation for coverage reports.
2. **Combine it with Playwright** for end-to-end testing.
3. **Generate coverage reports** to track test coverage metrics for React components.

## License

[MIT](./LICENSE)

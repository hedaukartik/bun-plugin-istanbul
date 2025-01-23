import type { BunPlugin, Loader } from "bun";
import { promises as fs } from "fs";

import NYC from "nyc";
import configUtil from "nyc/lib/config-util.js";

const { parserPlugins } = require("@istanbuljs/schema").defaults.nyc;

export type IstanbulPluginPreloader = (args: {
	path: string;
}) => Promise<{ contents: string }>;

export type IstanbulPluginConfig = {
	filter: RegExp;
	loader: Loader;
	name: string;
	preloader?: IstanbulPluginPreloader;
};

const defaultPreloader: IstanbulPluginPreloader = async (args) => ({
	contents: await fs.readFile(args.path, "utf-8"),
});

const bunPluginIstanbul = ({
	filter,
	loader,
	name,
	preloader,
}: IstanbulPluginConfig): BunPlugin => ({
	name,
	setup(build) {
		build.onLoad({ filter }, async (args) => {
			try {
				if (args.path.includes("node_modules")) return;
				const { argv } = await configUtil();
				const nyc = new NYC({
					...argv,
					parserPlugins: parserPlugins.concat("typescript", "jsx"),
				});

				const { contents: inCode } = await (preloader || defaultPreloader)(
					args
				);

				const outCode = nyc._transform(inCode, args.path) || inCode;

				return { contents: outCode, loader };
			} catch (error) {
				console.error(error);
				throw Error("Error");
			}
		});
	},
});

export default bunPluginIstanbul;

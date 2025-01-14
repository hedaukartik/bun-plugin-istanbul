import dts from "bun-plugin-dts";

// eslint-disable-next-line no-console
console.log("Building...");

await Bun.build({
	entrypoints: ["./src/index.ts"],
	outdir: "./dist",
	target: "bun",

	plugins: [dts()],
});

// eslint-disable-next-line no-console
console.log("Built!");

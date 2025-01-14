declare module "nyc" {
	export default class NYC {
		constructor(options: any);
		_transform(code: string, filename: string): string;
	}
}

declare module "nyc/lib/config-util.js" {
	export default function configUtil(): Promise<{ argv: any }>;
}

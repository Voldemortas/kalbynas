import { $ } from "bun";
import * as sass from "sass";
import { readdir } from "node:fs/promises";

export default async function buildFront(entrypoints: string[]) {
	await $`cp src/front temp/ -r`;

	try {
		const isMatchingScss = (name: string) => /\.scss$/.test(name);

		const scssFiles = (await readdir("temp/", { recursive: true })).filter(
			isMatchingScss,
		);

		await Promise.all(
			scssFiles.map(async (f) => {
				const { css } = await sass.compileAsync(`temp/${f}`);
				await Bun.write(`temp/${f.replace(/\.scss$/, ".css")}`, css);
			}),
		);

		const b = await Bun.build({
			entrypoints: entrypoints.map(e => e.replace(/^front/, 'temp/')),
			outdir: "out/front",
			experimentalCss: true,
			minify: Bun.env.NODE_ENV === "production",
      root: 'temp'
		});
		if (!b.success) {
			console.error(b.logs);
		}
	} catch (e) {
		console.error(e);
		return 1
	}

	await $`rm -rf temp/`;
}
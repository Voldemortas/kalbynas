import { $ } from "bun";
import buildFront from "./build-front";
import pages from './src/pages'
import type {PageType, ReactType} from './src/pages'
import buildBack from "./build-back";

export default async function build() {
    await $`rm -rf out`
    await $`mkdir out`
    await $`cp -r src/static/ out/static/`
    const frontPaths = (pages as PageType<ReactType>[])
        .filter(p => p.resolve.type === "react")
        .map(p => p.resolve.path)
    await buildFront(frontPaths) 
    await buildBack()
}

await build()
import type { RendererContext } from "vue-bundle-renderer/runtime";
import type { NuxtSSRContext } from "nuxt/app";
interface Renderer {
	rendererContext: RendererContext;
	renderToString(ssrContext: NuxtSSRContext): Promise<{
		html: string;
		renderResourceHeaders: () => Record<string, string>;
		renderResourceHints: () => string;
		renderStyles: () => string;
		renderScripts: () => string;
	}>;
}
// -- SSR Renderer --
export declare const getSSRRenderer: unknown;
export declare function getRenderer(ssrContext: NuxtSSRContext): Promise<Renderer>;
// @ts-expect-error file will be produced after app build
export declare const getSSRStyles: unknown;
export {};

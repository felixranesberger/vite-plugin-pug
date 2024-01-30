import { LocalsObject, Options } from 'pug';
import { Logger, Plugin } from 'vite';

interface PluginOptions extends Options {
    localImports?: boolean | ((htmlfile: string) => boolean);
}
declare function pugs(html: string, pugger: (filename: string, tagLocals: Record<string, unknown>) => string, logger?: Pick<Logger, "warn">): string;
declare function pugPlugin(options?: PluginOptions, locals?: LocalsObject): Plugin;

export { pugPlugin as default, pugs };

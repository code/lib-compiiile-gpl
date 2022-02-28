import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'
import viteComponents from 'vite-plugin-components'
import scanMarkdownFiles from "./vitePluginScanMarkdownFiles";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
        markdown({
            headEnabled: true,
            wrapperClasses: 'markdown-wrapper'
        }),
        viteComponents({
            customLoaderMatcher: path => path.endsWith('.md'),
            globs: ["!(./node_modules/**)","!(**.git**)","**.md"],
        }),
        scanMarkdownFiles()
    ]
})

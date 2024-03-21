import {defineConfig} from 'vite';
import {resolve} from 'path';
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import {visualizer} from "rollup-plugin-visualizer";

export default defineConfig({
    base: './',
    plugins: [
        ViteImageOptimizer({
            jpg: {
                quality: 80,
            }
        }),
        visualizer({
            filename: 'extra/visualizer/index.html',
        })
    ],
    build: {
        minify: 'esbuild',
        rollupOptions: {
            input: {
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                index: resolve(__dirname, 'index.html'),
                menu: resolve(__dirname, 'menu.html'),
                "news-detail": resolve(__dirname, 'news-detail.html'),
                news: resolve(__dirname, 'news.html'),
            }
        }
    }
})
import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
    base: "/women_day_postcard/",
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            music: resolve(__dirname, 'pages/music.html'),
          },
        },
      },
})

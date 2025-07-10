// @ts-check
import autoprefixer from 'autoprefixer'

/* Could be typed like this: @type {import('postcss-load-config').Config} but i want to install full dependency only for typings here */
const config = {
  plugins: [
    // Add new plugins above autoprefixer
    autoprefixer,
  ],
}

export default config

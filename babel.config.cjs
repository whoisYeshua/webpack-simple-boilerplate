const isDevelopment = environment => environment === 'development'

const babelConfig = api => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: '3.22',
        },
      ],
      // Enable development transform of React with new automatic runtime (https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
      [
        '@babel/preset-react',
        { development: isDevelopment(api.env()), runtime: 'automatic' },
      ],
      '@babel/preset-typescript',
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(isDevelopment(api.env()) && { plugins: ['react-refresh/babel'] }),
  }
}

module.exports = babelConfig

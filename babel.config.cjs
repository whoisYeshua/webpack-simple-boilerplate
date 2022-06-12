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
      ['@babel/preset-typescript'],
      // Enable development transform of React with new automatic runtime
      [
        '@babel/preset-react',
        { development: isDevelopment(api.env()), runtime: 'automatic' },
      ],
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(isDevelopment(api.env()) && { plugins: ['react-refresh/babel'] }),
  }
}

module.exports = babelConfig

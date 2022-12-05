const babelConfig = api => {
  // This caches the Babel config (https://babeljs.io/docs/en/config-files#apicache:~:text=Since%20the%20actual%20callback%20result%20is%20used%20to%20check%20if%20the%20cache%20entry%20is%20valid%2C%20it%20is%20recommended%20that%3A)
  api.cache.using(() => process.env.NODE_ENV === 'development')

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: '3.26',
        },
      ],
      // Enable development transform of React with new automatic runtime (https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
      [
        '@babel/preset-react',
        { development: api.env('development'), runtime: 'automatic' },
      ],
      '@babel/preset-typescript',
    ],
    // Applies the react-refresh Babel plugin on dev mode only
    ...(api.env('development') && { plugins: ['react-refresh/babel'] }),
  }
}

module.exports = babelConfig

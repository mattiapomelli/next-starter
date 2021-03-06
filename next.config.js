const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [
        {
          loader: '@svgr/webpack',
          // https://react-svgr.com/docs/options/
          options: {
            icon: true,
          },
        },
      ],
    })

    return config
  },
  poweredByHeader: false,
})

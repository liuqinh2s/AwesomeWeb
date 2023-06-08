const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".less", ".css"],
  },
  module: {
    rules: [
      // TypeScript 文件的规则
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx', // 如果使用React的JSX语法，请指定'jsx'作为loader选项
              target: 'es2017' // 指定目标JavaScript版本
            }
          }]
      },
      // Less 文件的规则
      {
        test: /\.(css|less|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  }

};
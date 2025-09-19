const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    // 公共路径，非常重要，决定了打包后资源的引用基础 URL
    publicPath: "/AwesomeWeb",
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
            loader: "esbuild-loader",
            options: {
              loader: "tsx", // 如果使用React的JSX语法，请指定'jsx'作为loader选项
              target: "es2017", // 指定目标JavaScript版本
            },
          },
        ],
      },
      // Less 文件的规则
      {
        test: /\.(css|less|sass)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "build"),
        },
      ],
    }),
  ],
};

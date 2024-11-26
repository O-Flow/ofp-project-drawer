const path = require('path')
const webpack = require('webpack')
const WebSocket = require('ws')

class CompilationNotifierPlugin {
  apply(compiler) {
    let wss

    compiler.hooks.compile.tap('CompilationNotifierPlugin', () => {
      if (wss) return;
      wss = new WebSocket.Server({ port: 8081 })
      console.log('\nCompilation NotifierPlugin Websocket Started.\n')
    })

    compiler.hooks.done.tap('CompilationNotifierPlugin', () => {
      if (!wss) return;
      setTimeout(() => {
        let message = 'Compiled At: ' + Date.now()
        console.log('\n' + message + '\n')
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(message)
          }
        })
      }, 1)
    })
  }
}

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    hot: false,
    watchFiles: ['src/**/*'],
    liveReload: false,
    open: false,
    client: {
      reconnect: true,
      overlay: {
        warnings: false,
        errors: true,
      }
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CompilationNotifierPlugin(),
  ],
}

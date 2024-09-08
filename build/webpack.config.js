import { createRequire } from 'module';
const require = createRequire('import.meta.url');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
     mode:'development',
     entry: path.resolve(__dirname,'./src/main.ts'),
     output:{
        path: path.resolve(__dirname, 'dsit'),
        filename: 'bundle.js'
     },
     plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title:'webpack内容'
        })
     ]       
}
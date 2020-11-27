var config = {
    entry: './main.js',

    output:{
        path:'/output/',
        filename: 'index.js',
    },

    devserver:{
        inline:true,
        port:8080
    },
    
    module:{
        loaders:{
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query:{
                    presets: ['es2015','react']
                }
            }
        }
    }
}

ModuleFilenameHelpers.exports = config;
module.exports = {
    mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    entry: './src/index.tsx',
    output: {
        filename: 'main.js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions. 
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /src\/.*\.ts(x?)$/,
                exclude: [
                    /node_modules/
                ],
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};
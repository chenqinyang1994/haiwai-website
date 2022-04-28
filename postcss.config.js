module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                    camelCase: true,
                    normalizeWhitespace: false,
                    zindex: false,
                },
            ],
        }),
        require('postcss-pxtorem')({
            rootValue: 20,
            propList: ['*'],
            selectorBlackList: [/^html$/],
            minPixelValue: 2, //最小1像素不需要转化
        }),
    ],
};

// module.exports = {
//     plugins: [
//         // require('postcss-easing-gradients'),
//         require('postcss-pxtorem')({
//             rootValue: 20,
//             propList: ['*'],
//             selectorBlackList: [/^html$/],
//         }),
//         require('autoprefixer'),
//         require('cssnano')({
//             preset: [
//                 'default',
//                 {
//                     discardComments: {
//                         removeAll: true,
//                     },
//                     camelCase: true,
//                 },
//             ],
//         }),
//     ],
// };
// module.exports = {
//     plugins: {
//         'postcss-pxtorem': {
//             rootValue: 16,
//             propList: ['*'],
//             selectorBlackList: [/^html$/],
//         },
//         autoprefixer: {},
//     },
// };

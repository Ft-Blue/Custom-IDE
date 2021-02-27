const { resolve6 } = require('dns');
const { resolve } = require('path');

// import virtual from '@rollup/plugin-virtual';
rollup = require('rollup')
typescript = require('@rollup/plugin-typescript')
commonjs = require('@rollup/plugin-commonjs')
resolve = require('rollup-plugin-node-resolve')

rollup.rollup(
    {
        input: 'grammar/TodoLangGrammar/parser.ts',

        plugins: [
            typescript({
                target: "es6",
                module: "commonjs"
            }),
            commonjs(),
            resolve({
                jsnext: true,
                main: true
            })
        ],
    }
).then((bundle) => {
    bundle.write(
        {
            dest: 'bundle.js',
            format: 'cjs'
        }
    )
})

// export default {
//     input: 'grammar/TodoLangGrammar/parser.ts',

//     output: {
//         file: 'bundle.js',
//         format: 'cjs'
//     },

//     plugins: [
//         typescript({
//             target: "es6",
//             module: "commonjs"
//         }),
//         commonjs(),
//         resolve({
//             jsnext: true,
//             main: true
//         })
//     ],
// };
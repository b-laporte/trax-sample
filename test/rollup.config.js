import typescript from "rollup-plugin-typescript2";
import resolve from '@rollup/plugin-node-resolve';
import trax from '@ivy-js/trax/rollup-plugin';
import { terser } from 'rollup-plugin-terser';

export default {
    input: `test/testsuite.ts`,
    output: {
        file: 'dist/test.specs.js',
        format: 'cjs',
        sourcemap: false
    },
    external: [
        'assert'
    ],
    plugins: [
        resolve(),
        trax(),
        typescript({
            tsconfig: 'test/tsconfig.json'
        }),
        terser()
    ]
};

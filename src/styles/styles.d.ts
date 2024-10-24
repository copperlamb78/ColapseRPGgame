import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            'gray-100': string;
            'gray-300': string;
            'gray-500': string;
            'gray-700': string;

            'brown-100': string;
            'brown-400': string;

            'black': string;
            'white': string;

            'red': string;

            'green': string;

            'blue-400': string;
            'blue-700': string;
        }
    }
}
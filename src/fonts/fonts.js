import localFont from "next/font/local";

export const Gilroy = localFont({
    src: [
        {
            path: './Gilroy-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Gilroy-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: './Gilroy-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: './Gilroy-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './Gilroy-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './Gilroy-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './Gilroy-UltraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: './Gilroy-Extrabold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: './Gilroy-Heavy.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: './Gilroy-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
    ],
    variable: '--font-gilroy'
})
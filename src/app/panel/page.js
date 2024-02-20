import localFont from 'next/font/local'
import Image from "next/image";
import Link from 'next/link'
import Header from "@/app/components/header";
const Gilroy = localFont({
    src: [
        {
            path: '../fonts/Gilroy-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-UltraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Extrabold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Heavy.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../fonts/Gilroy-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-gilroy'
})

export const metadata = {
    title: "Панель управления — BoxCMS",
    description: "Новичек в сфере монетизации Minecraft проектов.",
};

export default function Panel() {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} overflow-hidden font-sans min-w-[361px]`}>
        <main className="container mx-auto max-w-screen-xl ">
            <Header/>
            <section className="pt-20 container justify-center xl:justify-start xl:mx-auto max-w-screen-xl xl:mt-20 flex xl:space-x-[30px]">

            </section>
        </main>
        </body>
        </html>

    );
}
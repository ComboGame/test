import Header from "@/app/s/[name]/components/header";
import localFont from 'next/font/local';
const Gilroy = localFont({
    src: [
        {
            path: '../../../fonts/Gilroy-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-UltraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-Extrabold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-Heavy.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../../fonts/Gilroy-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
    ],
    variable: '--font-gilroy'
})
export const metadata = {
    title: "ServerName - Википедия",
    description: "",
};

export default function RulesLayout({children}) {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} font-sans min-w-[591px]`}>
        <div className="grid min-h-screen grid-rows-[1fr_auto]">
            <Header/>
            <main className="content">
                <section>
                    <div className="container max-w-screen-xl mx-auto">
                        {children}
                    </div>
                </section>
            </main>
        </div>
        </body>
        </html>
    );
}

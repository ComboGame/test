import Header from "@/app/s/[name]/components/header";
import localFont from 'next/font/local'
import Image from "next/image";
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

export default function Shop() {
    return (
        <html lang="en" id="element" className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
            <body className={`${Gilroy.variable} font-sans min-w-[591px]`}>
                <Header/>
                <main className="container mx-auto max-w-screen-xl mt-[122px]">
                    <div className="grid grid-cols-1 px-[30px] xl:px-0 xl:grid-cols-2 gap-[30px] xl:gap-[40px]">
                        <div className="bg-[#1A1920] rounded-[10px] flex">
                            <Image
                                src="/item_image.png"
                                className="rounded-[10px] h-[254px] md:h-[300px]"
                                width={300}
                                height={300}
                                quality={100}
                                alt="item_image"
                            />
                            <div className="flex flex-col p-[20px] md:p-[30px] justify-between">
                                <h4 className="text-[#BCB7CF] font-bold text-2xl">Администратор</h4>
                                <p>Описание товара, показать только тот текст, который влезит в этот блок, если текст не
                                    влезает, то в конце стоит 3 точки "текст..."</p>
                                <button
                                    className="text-[#8983A6] text-base font-bold px-12 py-[9px] bg-[#2C2A36] rounded-[5px]">Приобрести
                                </button>
                            </div>
                        </div>
                        <div className="bg-[#1A1920] rounded-[10px] flex">
                            <Image
                                src="/item_image.png"
                                className="rounded-[10px] h-[254px] md:h-[300px]"
                                width={300}
                                height={300}
                                quality={100}
                                alt="item_image"
                            />
                            <div className="flex flex-col p-[20px] md:p-[30px] justify-between">
                                <h4 className="text-[#BCB7CF] font-bold text-2xl">Администратор</h4>
                                <p>Описание товара, показать только тот текст, который влезит в этот блок, если текст не
                                    влезает, то в конце стоит 3 точки "текст..."</p>
                                <button
                                    className="text-[#8983A6] text-base font-bold px-12 py-[9px] bg-[#2C2A36] rounded-[5px]">Приобрести
                                </button>
                            </div>
                        </div>
                        <div className="bg-[#1A1920] rounded-[10px] flex">
                            <Image
                                src="/item_image.png"
                                className="rounded-[10px] h-[254px] md:h-[300px]"
                                width={300}
                                height={300}
                                quality={100}
                                alt="item_image"
                            />
                            <div className="flex flex-col p-[20px] md:p-[30px] justify-between">
                                <h4 className="text-[#BCB7CF] font-bold text-2xl">Администратор</h4>
                                <p>Описание товара, показать только тот текст, который влезит в этот блок, если текст не
                                    влезает, то в конце стоит 3 точки "текст..."</p>
                                <button
                                    className="text-[#8983A6] text-base font-bold px-12 py-[9px] bg-[#2C2A36] rounded-[5px]">Приобрести
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}

import Header from "@/app/components/header";
import localFont from 'next/font/local'
import Image from "next/image";
import Link from 'next/link'
const Gilroy = localFont({
    src: [
        {
            path: 'fonts/Gilroy-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-UltraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Extrabold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Heavy.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: 'fonts/Gilroy-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-gilroy'
})

export default function Home() {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} font-sans min-w-[591px]`}>
        <main className="container mx-auto  max-w-screen-xl ">
            <Header/>
            <section
                className="text-center z-10 mx-auto pt-[267px] relative overflow-hidden text-white">
                <div className="absolute inset-0 grid place-items-center">
                    <div
                        className="motion-safe:animate-homeCircle grid h-full w-full grid-rows-1 place-items-center opacity-30 [grid-area:1/1] dark:opacity-75 children:[grid-area:1/1]">
                        <div
                            className="translate-y-[370px] absolute w-[600px] h-[300px] bg-[#7F69FF]/50 blur-2xl rounded-full"></div>
                    </div>
                </div>
                <div className="grid z-10 h-full space-y-[80px] pb-[80px] w-full grid-rows-1 place-items-center">
                    <div className="flex items-center">
                        <h1 className="inline-block text-7xl font-bold text-center text-white">BOXCMS - <span
                            className={`${Gilroy.variable} italic text-[#B8B8FF]`}>ЛУЧШЕЕ</span><br/>Решение Для
                            Сервера!
                        </h1>
                    </div>
                    <p className="text-2xl tracking-wide leading-9 text-center text-[#E2E2E2]">
                        Все в одном месте. Сделайте новый шаг в развитии и<br/>монетизации вашего проекта.</p>
                    <div className="flex items-center space-x-[40px]">
                        <button
                            className="text-[#28283B] flex items-center font-bold justify-center space-x-[14px] text-base px-[30px] py-[15px] bg-[#B8B8FF] rounded-lg">
                            <Image
                                src="/plus.svg"
                                className="w-6 h-6"
                                width={24}
                                height={24}
                                alt="plus"
                            />
                            <p>Создать сайт</p>
                        </button>
                        <button
                            className="text-[#B8B7FF] flex items-center font-bold justify-center space-x-[14px] text-base px-[38px] py-[15px] bg-[#B8B8FF]/25 rounded-lg">
                            <Image
                                src="/idns.svg"
                                className="w-6 h-6"
                                width={24}
                                height={24}
                                alt="plus"
                            />
                            <p>Инструкция</p>
                        </button>
                    </div>
                </div>


                <hr className="bg-gradient-to-r h-px mx-[140px] border-0 from-[#473B8A]/0 via-[#473B8A] to-[#473B8A]/0"/>
            </section>
            <div className="relative z-10">
                <Link href="#"
                      className="flex absolute mx-auto text-center ring-4 ring-[#5A4F96] ring-offset-0 inset-x-0 -bottom-[20px] w-[40px] h-[40px] items-center justify-center bg-[#9C9CFF] rounded-full">
                    <Image
                        src="/strelka.svg"
                        className="w-[24px] h-[24px]"
                        width={24}
                        height={24}
                        quality={100}
                        alt="Главная"
                        priority={true}
                    />
                </Link>
            </div>
            <section
                className="text-center py-20 relative z-0 space-y-[80px] text-white">
                <div className="flex gap-[25px]">
                    <div className="h-[360px] relative w-[825px] bg-[#97786B]/10 border-[#9E7667]/25 border backdrop-blur-[100px] rounded-[10px]">
                        <div className="flex">
                            <div
                                className="space-y-[15px] text-[#FFE0D2]/75 font-medium text-[18px] text-left pt-[50px] pl-[50px] pr-[40%]">
                                <h3 className="font-bold text-[#FFE0D2] text-[36px]">Мощная кастомизация</h3>
                                <p className="">Настройте дизайн и страницы вашего сайта за считанные минуты, просто переключив
                                    флажок и
                                    используя наши красивые и разнообразные шаблоны.
                                    <br/><br/>А если этого не достаточно, то подключите пользовательские CSS стили для
                                    вашего сайта.</p>
                            </div>
                            {/*blur-2xl*/}

                        </div>
                        <div className="absolute inset-0 grid place-items-center ">

                            <div
                                className="translate-x-full absolute w-[250px] h-[250px] bg-[#D39A86] blur-2xl rounded-full"></div>
                            <Image
                                src="/paintkit.png"
                                className="translate-x-[65%] -translate-y-[5%] absolute w-[367px] h-[400px]"
                                width={367}
                                height={400}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                        </div>

                    </div>
                    <div
                        className="h-[360px] overflow-hidden relative w-[430px] bg-[#7EC5FF]/10 border-[#7EC5FF]/25 border backdrop-blur-[100px] rounded-[10px]">
                        <div className="flex">
                            <div
                                className="space-y-[15px] text-[#CDE9FF]/75 font-medium text-[18px] text-left pt-[50px] pl-[50px] pr-[30%]">
                                <h3 className="font-bold text-[#CDE9FF] text-[36px]">Адаптация</h3>
                                <p className="">Магазином одинаково удобно пользоваться как на компьютерах, так и на планшетах и даже мобильных устройствах.
                                    <br/><br/>Все благодаря нашим умелым верстальщикам)</p>
                            </div>
                            {/*blur-2xl*/}

                        </div>
                        <div className="absolute inset-0 grid place-items-center ">

                            <div
                                className="translate-x-full absolute w-[250px] h-[250px] bg-[#CDE9FF] blur-2xl rounded-full"></div>
                            <Image
                                src="/adaptive.png"
                                className="translate-x-full absolute w-[150px] h-[297px]"
                                width={150}
                                height={297}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-[25px]">
                    <div
                        className="h-[360px] w-[825px] bg-[#97786B]/10 border-[#9E7667]/25 border backdrop-blur-[100px] rounded-[10px]">

                    </div>
                    <div className="h-[360px] w-[430px] bg-[#CDE9FF]"></div>
                </div>
            </section>
        </main>
        </body>
        </html>
    );
}
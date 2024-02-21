import Header from "@/app/components/header";
import Image from "next/image";
import Link from 'next/link'
import Footer from "@/app/components/footer";
import {Gilroy} from "@/fonts/fonts";

export default function Home() {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} font-sans min-w-[361px]`}>
        <main className="container mx-auto max-w-screen-xl ">
            <Header/>
            <section
                className="text-center mx-auto pt-[100px] sm:pt-[267px] px-[40px] sm:px-0 relative overflow-hidden text-white">
                <div className="absolute inset-0 z-10 grid place-items-center">
                    <div
                        className="motion-safe:animate-homeCircle grid h-full w-full grid-rows-1 place-items-center opacity-30 [grid-area:1/1] dark:opacity-75 children:[grid-area:1/1]">
                        <div
                            className="translate-y-[370px] absolute w-[600px] h-[300px] bg-[#7F69FF]/50 blur-[100px] rounded-full"></div>
                    </div>
                </div>
                <div
                    className="grid relative z-20 h-full space-y-[25px] sm:space-y-[80px] pb-[80px] w-full grid-rows-1 sm:place-items-center">
                    <div className="flex items-center">
                        <h1 className="inline-block text-[32px] sm:text-[52px] md:text-7xl font-bold text-left leading-10 sm:text-center text-white">BOXCMS
                            - <span
                                className={`${Gilroy.variable} italic text-[#B8B8FF]`}>ЛУЧШЕЕ</span>
                            {/*<p className="sm">Решение</p>*/}
                            <p>Решение Для Сервера!</p>
                        </h1>
                    </div>
                    <p className="text-[12px] pb-[25px] sm:pb-0 sm:text-2xl tracking-wide leading-tight sm:leading-9 text-left sm:text-center text-[#E2E2E2]">
                        Все в одном месте. Сделайте новый шаг в развитии и монетизации вашего проекта.</p>
                    <div
                        className="flex flex-col sm:flex-row sm:items-center space-y-[15px] sm:space-y-0 sm:space-x-[40px]">
                        <button
                            className="text-[#28283B] select-none flex items-center font-bold justify-center space-x-[14px] text-base px-[30px] py-[15px] transition-all hover:bg-[#CFCFFF] bg-[#B8B8FF] rounded-lg">
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
                            className="text-[#B8B7FF] select-none flex items-center font-bold justify-center space-x-[14px] text-base px-[38px] py-[15px] transition-all hover:bg-[#7F7FD7]/25 bg-[#B8B8FF]/25 rounded-lg">
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


                <hr className="bg-gradient-to-r h-px mx-[25px] md:mx-[140px] border-0 from-[#473B8A]/0 via-[#473B8A] to-[#473B8A]/0"/>
            </section>
            <div className="relative z-30">
                <Link href="#advantages"
                      className="flex absolute select-none mx-auto text-center ring-4 hover:ring-[#8072CF] transition-all ring-[#5A4F96] ring-offset-0 inset-x-0 -bottom-[20px] w-[40px] h-[40px] items-center justify-center bg-[#9C9CFF] rounded-full">
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
            <section id="advantages" className="text-center py-20 relative z-0 space-y-[25px] px-[25px] xl:px-0 text-white">
                <div className="flex flex-col xl:flex-row gap-[25px]">
                    <Link href=""
                          className="sm:h-[360px] hover:bg-[#97786B]/15 transition-all relative w-full xl:w-[825px] bg-[#97786B]/10 border-[#9E7667]/25 border backdrop-blur-[100px] rounded-[10px]">
                        <div
                            className="z-20 relative flex xl:items-start items-center justify-center xl:justify-start h-full">
                            <div
                                className="space-y-[25px] text-[#FFE0D2]/75 font-medium text-[14px] sm:text-[18px] text-left sm:text-center xl:text-left xl:pt-[45px] max-w-xl xl:max-w-full py-[25px] px-[25px] sm:px-[50px] xl:pl-[50px] xl:pr-[40%]">
                                <h3 className="font-bold text-[#FFE0D2] leading-none text-[24px] sm:text-[36px]">Мощная
                                    кастомизация</h3>
                                <p className="xl:mr-[80px] leading-6">Настройте дизайн и страницы вашего сайта за
                                    считанные
                                    минуты, просто переключив
                                    флажок и
                                    используя наши красивые и разнообразные шаблоны.
                                    <br/><br/>А если этого не достаточно, то подключите пользовательские CSS стили для
                                    вашего сайта.</p>
                            </div>

                        </div>
                        <div
                            className="absolute select-none z-0 overflow-hidden inset-0 hidden xl:grid place-items-center rounded-[10px]">

                            <div
                                className="translate-x-full  absolute w-[257px] h-[257px] bg-[#D39A86] blur-[104px] rounded-full"></div>

                        </div>
                        <div className=" absolute select-none z-0 inset-0 hidden xl:grid place-items-center ">
                            <Image
                                src="/paintkit.png"
                                className="translate-x-[65%] -translate-y-[3%] absolute w-[367px]"
                                width={367}
                                height={400}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                        </div>

                    </Link>
                    <Link href=""
                          className="sm:h-[360px] hover:bg-[#7EC5FF]/15 transition-all overflow-hidden relative w-full xl:w-[430px] bg-[#7EC5FF]/10 border-[#7EC5FF]/25 border backdrop-blur-[100px] rounded-[10px]">
                        <div
                            className="flex z-20 relative xl:items-start items-center justify-center xl:justify-start h-full">
                            <div
                                className="space-y-[25px] text-[#CDE9FF]/75 font-medium text-[14px] sm:text-[18px] text-left sm:text-center xl:text-left xl:pt-[45px] max-w-xl xl:max-w-full py-[25px] px-[25px] sm:px-[50px] xl:pl-[50px] xl:pr-[30%]">
                                <h3 className="font-bold text-[#CDE9FF] leading-none text-[24px] sm:text-[36px]">Адаптация</h3>
                                <p className="leading-6">Магазином одинаково удобно пользоваться как на компьютерах, так
                                    и на планшетах и даже мобильных устройствах.
                                    <br/><br/>Все благодаря нашим умелым верстальщикам)</p>
                            </div>
                            {/*blur-2xl*/}

                        </div>
                        <div className="absolute select-none z-0 inset-0 hidden xl:grid place-items-center ">

                            <div
                                className="translate-x-full absolute w-[250px] h-[250px] bg-[#CDE9FF] blur-[193px] rounded-full"></div>
                            <Image
                                src="/adaptive.png"
                                className="translate-x-full  absolute w-[150px]"
                                width={150}
                                height={297}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col xl:flex-row gap-[25px]">
                    <Link href=""
                          className="sm:h-[360px] hover:bg-[#D0ACFF]/15 transition-all overflow-hidden relative w-full xl:w-[430px] bg-[#D0ACFF]/10 border-[#C193FF]/25 border backdrop-blur-[100px] rounded-[10px]">
                        <div
                            className="flex z-20 relative xl:items-start items-center justify-center xl:justify-start h-full">
                            <div
                                className="space-y-[25px] text-[#E0D1FF]/75 font-medium text-[14px] sm:text-[18px] text-left sm:text-center xl:text-left xl:pt-[45px] max-w-xl xl:max-w-full py-[25px] px-[25px] sm:px-[50px] xl:pl-[50px] xl:pr-[30%]">
                                <h3 className="font-bold text-[#E0D1FF] leading-none text-[24px] sm:text-[36px]">Статистика</h3>
                                <p className="leading-6">Следите за показателями вашего магазина: посещаемостью,
                                    продажами, доходом и многими другими.
                                    <br/><br/>Все через удобную панель управления.</p>
                            </div>

                        </div>
                        <div className="absolute select-none z-0 inset-0 hidden xl:grid place-items-center ">

                            <div
                                className="translate-x-full absolute w-[250px] h-[250px] bg-[#9F70FF] blur-[193px] rounded-full"></div>
                            <Image
                                src="/stats.png"
                                className="translate-x-[93%] absolute w-[151px] "
                                width={150}
                                height={297}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                        </div>
                    </Link>
                    <Link href=""
                          className="sm:h-[360px] hover:bg-[#FFAFAF]/15 transition-all relative w-full xl:w-[825px] bg-[#FFAFAF]/10 border-[#FFAEAE]/25 border backdrop-blur-[100px] rounded-[10px]">
                        <div
                            className="flex z-20 relative xl:items-start items-center justify-center xl:justify-start h-full">
                            <div
                                className="space-y-[25px] text-[#FFD9D9]/75 font-medium text-[14px] sm:text-[18px] text-left sm:text-center xl:text-left xl:pt-[45px] max-w-xl xl:max-w-full py-[25px] px-[25px] sm:px-[50px] xl:pl-[50px] xl:pr-[38%]">
                                <h3 className="font-bold text-[#FFD9D9] leading-none text-[24px] sm:text-[36px]">Комплексное
                                    решение</h3>
                                <p className="xl:mr-[80px] leading-6">Настройте свой магазин, добавьте товары,
                                    подключите
                                    игровой сервер и начните получать доход за считанные минуты.
                                    <br/><br/>Все удобно и просто как для Пользователя, так и для Администратора
                                    проекта.
                                    <br/><br/>Мы стараемся упростить задачу для всех!</p>
                            </div>
                            {/*blur-2xl*/}

                        </div>
                        <div
                            className="absolute select-none z-0 overflow-hidden inset-0 hidden xl:grid place-items-center rounded-[10px]">

                            <div
                                className="translate-x-full  absolute w-[257px] h-[257px] bg-[#FF999C] blur-[104px] rounded-full"></div>

                        </div>
                        <div className="absolute select-none z-0 inset-0 hidden xl:grid place-items-center ">
                            <Image
                                src="/raketa.png"
                                className="translate-x-[73%] translate-y-[4%] absolute w-[288px]"
                                width={288}
                                height={344}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                        </div>

                    </Link>

                </div>
                <div className="flex flex-col xl:flex-row gap-[25px]">
                    <Link href=""
                          className="sm:h-[360px] hover:bg-[#C2C6D3]/15 transition-all relative w-full xl:w-[825px] bg-[#C2C6D3]/10 border-[#C2C6D3]/25 border backdrop-blur-[100px] rounded-[10px]">
                        <div
                            className="flex z-20 relative xl:items-start items-center justify-center xl:justify-start h-full">
                            <div
                                className="space-y-[25px] text-[#FFFFFF]/75 font-medium text-[14px] sm:text-[18px] text-left sm:text-center xl:text-left xl:pt-[45px] max-w-xl xl:max-w-full py-[25px] px-[25px] sm:px-[50px] xl:pl-[50px] xl:pr-[40%]">
                                <h3 className="font-bold text-[#FFFFFF] leading-none text-[24px] sm:text-[36px]">Больше
                                    возможностей</h3>
                                <p className="xl:mr-[80px] leading-6">Размещайте динамическую карту, википедию, а так-же
                                    правила проекта прямо у нас на сайте.
                                    <br/><br/>А также, добавьте дополнительные информационные блоки на главной странице
                                    вашего сайта.
                                </p>
                            </div>

                        </div>
                        <div
                            className="absolute select-none z-0 overflow-hidden inset-0 hidden xl:grid place-items-center rounded-[10px]">

                            <div
                                className="translate-x-full absolute w-[190px] h-[190px] bg-[#E5E5E5] blur-[74px] rounded-full"></div>

                        </div>
                        <div className="absolute select-none z-0 inset-0 hidden xl:grid place-items-center ">
                            <Image
                                src="/shlapa.png"
                                className="translate-x-[67%] translate-y-[1%] absolute w-[300px]"
                                width={300}
                                height={408}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                        </div>

                    </Link>
                    <Link href=""
                          className="sm:h-[360px] hover:bg-[#A2FFB9]/15 transition-all overflow-hidden relative w-full xl:w-[430px] bg-[#A2FFB9]/10 border-[#A2FFB9]/25 border backdrop-blur-[100px] rounded-[10px]">
                        <div
                            className="flex z-20 relative xl:items-start items-center justify-center xl:justify-start h-full">
                            <div
                                className="space-y-[25px] text-[#E2FFE9]/75 font-medium text-[14px] sm:text-[18px] text-left sm:text-center xl:text-left xl:pt-[45px] max-w-xl xl:max-w-full py-[25px] px-[25px] sm:px-[50px] xl:pl-[50px] xl:pr-[30%]">
                                <h3 className="font-bold text-[#E2FFE9] leading-none text-[24px] sm:text-[36px]">Комиссия</h3>
                                <p className="leading-6">Мы предлагаем наиболее низкую комиссию, доступную в настоящее
                                    время.
                                    <br/><br/>Комиссия максимально низкая как для покупателя, так и для вас.</p>
                            </div>

                        </div>
                        <div className="absolute select-none z-0 inset-0 hidden xl:grid place-items-center ">

                            <div
                                className="translate-x-full absolute w-[250px] h-[250px] bg-[#96FFAF] blur-[193px] rounded-full"></div>
                            <Image
                                src="/kriper.png"
                                className="translate-x-[82%] absolute w-[164px] "
                                width={150}
                                height={297}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                        </div>
                    </Link>
                </div>
            </section>
            <hr className="bg-gradient-to-r h-px mx-[25px] md:mx-[140px] border-0 from-[#473B8A]/0 via-[#473B8A] to-[#473B8A]/0"/>
            <div className="relative z-30">
                <Link href="#free"
                      className="flex absolute select-none mx-auto text-center ring-4 hover:ring-[#8072CF] transition-all ring-[#5A4F96] ring-offset-0 inset-x-0 -bottom-[20px] w-[40px] h-[40px] items-center justify-center bg-[#9C9CFF] rounded-full">
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
            <section id="free" className="relative mt-[60px] ">
                <div
                    className="mx-[25px] xl:mx-0 absolute overflow-hidden h-[424px] bg-[#171621] rounded-[10px] inset-0 grid place-items-center">
                    <div className="z-20 relative space-y-[25px]">
                        <h1 className="font-bold text-[22px] mx-auto sm:text-[42px] md:text-[64px] leading-none text-center text-white">
                            Начни Развитие<br/>Проекта -
                            <span className={`${Gilroy.variable} italic font-bold text-[#B8B8FF]`}> БЕСПЛАТНО</span>
                        </h1>
                        <p className="text-[12px] sm:text-[18px] pb-[25px] max-w-[370px] mx-auto font-normal tracking-wide leading-tight text-center text-[#E2E2E2]">
                            Сейчас лучшее время, чтобы<br/>монетизировать свой проект
                        </p>
                        <div
                            className="flex flex-col sm:flex-row justify-center sm:items-center space-y-[15px] sm:space-y-0 sm:space-x-[40px]">
                            <button
                                className="text-[#28283B] select-none flex items-center font-bold justify-center space-x-[14px] text-base px-[30px] py-[15px] transition-all hover:bg-[#CFCFFF] bg-[#B8B8FF] rounded-lg">
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
                                className="text-[#B8B7FF] select-none flex items-center font-bold justify-center space-x-[14px] text-base px-[38px] py-[15px] transition-all hover:bg-[#7F7FD7]/25 bg-[#B8B8FF]/25 rounded-lg">
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
                    <div className="absolute select-none z-0 inset-0 grid place-items-center ">
                        <div
                            className="absolute w-[365px] h-[271px] bg-[#9C9CFF]/25 blur-[100px] rounded-full"></div>
                    </div>
                </div>

            </section>

        </main>
        <Footer/>
        {/*<div className="bg-[#0D0C11]">*/}
        {/*    <hr className="mb-[25px]  border-[#FFFFFF]/10 sm:mx-auto"/>*/}
        {/*    <div className="flex pb-[25px] items-center justify-center">*/}
        {/*          <span className="text-[16px] text-[#FFFFFF] text-center font-semibold">*/}
        {/*              <a href="/" className="hover:underline flex items-center">*/}
        {/*                  <Image*/}
        {/*                      src="/Logo.svg"*/}
        {/*                      className="h-[25px] me-[15px]"*/}
        {/*                      width={25}*/}
        {/*                      height={25}*/}
        {/*                      quality={100}*/}
        {/*                      alt="Главная"*/}
        {/*                      priority={true}*/}
        {/*                  />*/}
        {/*                  <p>*/}
        {/*                      Создано на базе <span className="font-bold">BOX<span className="text-[#B8B8FF]">CMS</span></span>*/}
        {/*                  </p>*/}
        {/*              </a>*/}
        {/*          </span>*/}
        {/*    </div>*/}
        {/*</div>*/}

        </body>
        </html>
    );
}
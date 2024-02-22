import Header from "@/app/s/[name]/components/header";
import {Gilroy} from "@/fonts/fonts";

export default function Server() {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className={`${Gilroy.variable} overflow-hidden font-sans min-w-[591px]`}>
            <Header/>
            <main className="flex  min-h-screen container mx-auto max-w-[1000px] flex-col items-center justify-between pt-[240px] px-24">

                <div
                    className="text-center flex z-10 space-y-[85px] flex-col items-center justify-center text-white">
                    <div className="flex items-center">
                        <h1 className="inline-block text-6xl font-bold text-center text-white">Сервер с упором на ванильное выживание</h1>
                    </div>
                    <p className="text-2xl tracking-wide leading-9 text-center text-[#E2E2E2]">
                        Уникальные и интересные ивенты, стабильный онлайн, активное и дружелюбное
                        сообщество. Присоединяйся! Мы ждем именно тебя</p>
                    <div className="flex items-center space-x-[40px]">
                        <button
                            className="text-white text-2xl font-semibold px-12 py-3 bg-gradient-to-br from-[#9B51E0] to-[#3081ED] rounded-2xl">Магазин
                        </button>
                        <button
                            className="text-white text-2xl font-semibold px-12 py-3 border border-[#D7D7D7] rounded-2xl">play.spcall.ru
                        </button>
                    </div>

                </div>
                <div className="absolute inset-0 grid place-items-center">
                    <div
                        className="motion-safe:animate-homeCirclesContainer grid h-full w-full grid-rows-1 place-items-center opacity-30 [grid-area:1/1] dark:opacity-75 children:[grid-area:1/1]">
                        <div
                            className="animate-homeCircle [--opacity-delay:-0s] [--position-delay:-20s] absolute w-[300px] h-[300px] bg-[#18B2DE] blur-2xl rounded-full"></div>
                        <div
                            className="animate-homeCircle [--opacity-delay:-0s] [--position-delay:-0s] absolute w-[300px] h-[300px] bg-[#FB37FF] blur-2xl rounded-full"></div>
                        {/*<div*/}
                        {/*    className="animate-homeCircle [--opacity-delay:-4s] [--position-delay:-14s] absolute w-[300px] h-[300px] bg-[#FF3737] blur-2xl rounded-full"></div>*/}
                    </div>
                </div>
            </main>
        </body>
        </html>
    );
}
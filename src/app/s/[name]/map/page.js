import Header from "@/app/s/[name]/map/comp/hedr";
import {Gilroy} from "@/fonts/fonts";

export default function Map() {
    return (
        <html lang="en" id="element"
              className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
            <body className={`${Gilroy.variable} overflow-hidden font-sans min-w-[591px]`}>
                <Header/>
                <div className="m-0 box-border">
                    <iframe className="w-full lg:border-none h-[calc(100vh)]"
                            src="http://map.schalker.ru:25910/"></iframe>
                </div>
            </body>
        </html>
    );
}

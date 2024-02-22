import Header from "@/app/s/[name]/components/header";
import {Gilroy} from "@/fonts/fonts";

export const metadata = {
    title: "ServerName - Википедия",
    description: "",
};

export default function WikiLayout({children}) {
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

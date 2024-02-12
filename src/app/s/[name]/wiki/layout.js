import Header from "@/app/s/[name]/components/header";

export const metadata = {
    title: "ServerName - Википедия",
    description: "",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" id="element" className="dark antialiased [--scrollbar-size:theme(width.4)] motion-safe:scroll-smooth">
        <body className="bg-schalker-black min-w-[560px]">
            <div className="grid min-h-screen grid-rows-[1fr_auto]">
                <Header/>
                <main className="content">
                    <section>
                        <div className="container px-6 mx-auto">
                            {children}
                        </div>
                    </section>
                </main>
            </div>
        </body>
        </html>
    );
}

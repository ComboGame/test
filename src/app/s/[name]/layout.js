import Header from "@/app/s/[name]/components/header";

export const metadata = {
    title: "ServerName - Description",
    description: "",
};

export default function RootLayout({children}) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}

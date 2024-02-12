import "./globals.css";

export const metadata = {
    title: "Автодонат Minecraft — BoxCMS",
    description: "Новичек в сфере монетизации Minecraft проектов.",
};

export default function RootLayout({children}) {
    return (
        <>{children}</>
    );
}

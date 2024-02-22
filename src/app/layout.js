"use client";
import "./globals.css";
import {SessionProvider} from "next-auth/react";

// export const metadata = {
//     title: "Автодонат Minecraft — BoxCMS",
//     description: "Новичек в сфере монетизации Minecraft проектов.",
// };

export default function RootLayout({ children, session }) {
    return (
        <>
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </>
    );
}

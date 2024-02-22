"use client";
import {useSession} from "next-auth/react";
import {SessionProvider} from "next-auth/react";

export default function LayoutComponent({ children }) {
    return (
        <React.Suspense fallback={<p>Loading...</p>}>
            <SessionProvider session={data}>
                {children}
            </SessionProvider>
        </React.Suspense>
    )
}

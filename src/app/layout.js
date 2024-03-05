import {Inter} from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Flores's Portfolio App",
    description: "Personal portfolio app for Flores. Built with Next.js and Tailwind CSS.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {/*IN TRANSITION PROVIDER*/}
        <TransitionProvider>{children}</TransitionProvider>
        {/*<div className="w-screen h-screen bg-gradient-to-b from-white to-blue-950">*/}
        </body>
        </html>
    );
}

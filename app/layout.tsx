import "./globals.css";
import "@/assets/styles/index.scss";
import { Inter } from "@next/font/google";
import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import type { ReactChildrenNode } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

interface RootLayoutProps {
    params: {
        slug: string;
    };
    children: ReactChildrenNode["children"];
}

function RootLayout({ params, children }: RootLayoutProps): JSX.Element {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <div style={{ color: "#334155" }}>
                    <Header params={params} />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

export default RootLayout;

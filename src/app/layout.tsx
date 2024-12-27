import type { Metadata } from "next"
import { Inter } from "next/font/google"
import '../globals/index.css'
import Header from '../components/layout/Header'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "R_INTERFACE",
    description: "Developer Portfolio",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
        <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <Header />
        {children}
        </body>
        </html>
    )
}
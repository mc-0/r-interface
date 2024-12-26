import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import SpaceBackground from '../components/SpaceBackground'
import './index.css'

const geistSans = Geist({
    subsets: ['latin'],
    variable: '--font-sans',
})
const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased dark`}
        >
        <SpaceBackground />
        {children}
        </body>
        </html>
    )
}
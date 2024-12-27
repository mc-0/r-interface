import { Button } from '../../components/ui/button'
import Header from '../../components/layout/Header'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-svh">
            <Header />
            <main className="flex-grow flex items-center justify-center pt-20">
                <div className="flex flex-col items-center gap-2 text-white bg-black/50 p-6 rounded-lg">
                    <h1 className="text-2xl font-bold">Hello, About</h1>
                    <Link href="/src/public">
                        <Button size="sm" className="mt-4">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
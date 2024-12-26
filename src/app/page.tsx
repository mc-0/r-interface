import { Button } from '../components/ui/button'
import Header from '../components/Header'

export default function Page() {
  return (
      <div className="flex flex-col min-h-svh">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="flex flex-col items-center gap-2 text-white bg-black/50 p-6 rounded-lg">
            <h1 className="text-2xl font-bold">Hello World</h1>
            <div className="text-sm">
              Get started by editing{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-semibold text-white">
                app/page.tsx
              </code>
            </div>
            <Button size="sm" className="mt-4">
              Button
            </Button>
          </div>
        </main>
      </div>
  )
}
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-slate-200 flex min-h-screen items-center justify-center p-24 ${inter.className}`}
    >
      <div class="relative flex justify-center w-full max-w-lg">
        <div class="absolute top-8 -left-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div class="absolute top-16 -right-8 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-4 left-8 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="absolute bottom-0 -right-16 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-6000"></div>
        <p className="flex justify-center p-8 bg-slate-300 bg-opacity-20 backdrop-blur-xl rounded-xl text-3xl text-slate-600 border-x-2 border-y-2 border-gray-300">
          API available at&nbsp;
          <Link href='/api/ip'>
            <code className="font-mono font-bold hover:underline text-blue-500">
              /api/ip
            </code>
          </Link>
        </p>
      </div>
    </main>
  )
}

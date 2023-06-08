import Goo from 'gooey-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-slate-200 flex min-h-screen justify-center items-center p-24 overflow-hidden ${inter.className}`}
    >
      <div className="flex flex-col w-full items-center justify-center max-w-lg">
        <Goo className='relative items-center justify-center' intensity='strong'>
          <div className="absolute top-8 -left-8 w-48 h-48 bg-violet-400 rounded-full opacity-100 saturate-200 animate-blob"></div>
          <div className="absolute top-8 -right-8 w-36 h-36 bg-purple-400 rounded-full opacity-100 saturate-200 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-8 -bottom-16 -left-8 w-36 h-36 bg-pink-400 rounded-full opacity-100 saturate-200 animate-blob animation-delay-4000"></div>
          <div className="absolute -top-8 -bottom-16 -right-8 w-48 h-48 bg-fuchsia-400 rounded-full opacity-100 saturate-200 animate-blob animation-delay-6000"></div>
        </Goo>
        <div className="flex justify-center items-center p-8 bg-slate-300 bg-opacity-20 backdrop-blur-xl rounded-xl text-3xl text-slate-600 border-x-2 border-y-2 border-gray-700">
          <p className="text-center">
            API available at&nbsp;
            <Link href='/api/ip'>
              <code className="font-mono font-bold hover:underline text-blue-500">
                /api/ip
              </code>
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

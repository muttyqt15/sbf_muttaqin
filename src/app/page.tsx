import Image from 'next/image'
import fortnite_logo from './fortnite_logo.png'
import ui_logo from './ui_logo.jpg'

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <nav className="w-full h-20 bg-white border border-slate-300 shadow-md flex items-center justify-between">
          <p className='text-2xl font-bold cursor-pointer m-3'>LOGO</p>
          <button className=''>Home</button>
        </nav>
      </main>
  )
}
import Image from 'next/image'
import fortnite_logo from './fortnite_logo.png'
import ui_logo from './ui_logo.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col arial">
        <nav className="w-full h-20 bg-white border- border-slate-300 shadow-md flex items-center justify-between">
          <p className='text-2xl font-bold cursor-pointer m-3'>LOGO</p>
          <div className='justify-center'>
          <button className='m-5 hover:text-blue-600'>Homepage</button>
          <button className='m-5 hover:text-blue-600'>Friends</button>
          <button className='m-5 hover:text-blue-600'>Tasks</button>
          <button className='m-5 hover:text-blue-600'>Events</button>
          <button className='m-5 hover:text-blue-600'>About Fasilkom/UI</button>
          <button className='m-5 hover:text-blue-600'>Welcome, Muttaqin Muzakkir</button>
          </div>
        </nav>
        <div className="mt-16 w-6/12 m-72">
          <div className="ml-32 flex items-center justify-between">
            <div>
            <h1 className="text-3xl font-bold text-slate-950">Muttaqin Muzakkir</h1>
            <p className="text-slate-800 ">Class of 2023</p>
            </div>
            <div>
              <button className="text-2xl font-semibold p-5 border-2 border-blue-700 rounded-md text-blue-700">Edit Profile</button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-48">
            <div>
              <div>
              <p className="font-bold">NICKNAME</p>
              <p>qin</p><br/>
              <p className="font-bold">MAJOR</p>
              <p>Information System</p><br/>
              <p className="font-bold">CURRENT CITY</p>
              <p>Depok</p><br/>
              <p className="font-bold">BIRTH INFORMATION</p>
              <p>Born in Qatar - July 14 2006</p>
              </div>
            </div>
            <div>
            <p className="font-bold">HIGH SCHOOL</p>
              <p>SMAS GLOBAL MANDIRI</p><br/>
              <p className="font-bold">WHATSAPP</p>
              <p>081218722101</p><br/>
              <p className="font-bold">ID LINE</p>
              <Link href="http://instagram.com/bigqqin">qinzm</Link><br/><br/>
              <p className="font-bold">INSTAGRAM</p>
              <Link href="http://instagram.com/bigqqin">bigqqin</Link><br/>
              </div>
          </div><br/>
          <div className="border-t border-gray-300 shadow-md"/><br/>
          <p className="font-bold">DESCRIPTION</p>
          <p>lagi cloning web pmb pak</p><br/>
          <div>
          <p className="font-bold">INTEREST</p>
          </div>
          <div className="w-full flex">
            <div className="mt-2 flex flex-wrap justify-between gap-2">
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div><div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Software Engineering</p>
              </div>
              <div className="border rounded-2xl p-2 bg-slate-200 text-slate-900 inline-block">
                <p>Suka Rafif</p>
              </div>
              
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
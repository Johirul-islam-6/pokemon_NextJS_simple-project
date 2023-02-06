import Head from 'next/head'
import Posts from './post'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Pokemon Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="home_page w-[100%] h-[90vh] flex justify-center items-center">
          <div className="block">
            <h1 className='text-center text-5xl'>WelCome to Pokemon Web Page</h1>
            <div className="home_btn mt-10 flex justify-center">
              <Link href={`/post`}> <button className='btn btn-primary '>Pokemon</button></Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

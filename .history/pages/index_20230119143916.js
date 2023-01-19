import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(data);
  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      {
        information && information.map((info, index) => {
          if(info.department.toLowerCase === "business") {
          return(
            <div key={index}>{info.degree}</div>
          )
          }
        })
      }
      
      </main>
    </>
  )
}
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const MainConatiner = ({ children, keywords }) => {
   return (
      <>
         <Head>

            <meta keywords="React, Next, Jawa-scriot $P"></meta>
            <title>next-js</title>
         </Head>
         <nav>
            <ul>
               <li><Link href="/"><a > Главаня</a></Link></li>
               <li><Link href="/users"><a > Пользователи</a></Link></li>
            </ul>
         </nav>
         {children}
      </>
   )
}

export default MainConatiner
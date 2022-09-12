import React, { useEffect, useState } from 'react'
import Link from "next/link"
import users from './styles/users.module.css'
import userss from './styles/userss.module.scss'
import MainConatiner from './MainConatiner'
const Users = ({ usersItems }) => {



   return (
      <MainConatiner>
         <div className="users">
            {usersItems.map(user =>
               <ul className={users.users__list}>
                  <Link href={`/users/${user.id} `}><a className={users.users__link}>{user.title}</a></Link>
                  <Link href={`/users/${user.id} `}><a className={userss.users__link}> {user.age}</a></Link>
               </ul >
            )}
         </div >
      </MainConatiner>
   )
}

export default Users


export async function getStaticProps(context) {

   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
   const usersItems = await response.json()


   return {
      props: { usersItems }, // will be passed to the page component as props
   }
}
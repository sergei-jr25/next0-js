import { useRouter } from "next/router"
import MainConatiner from "../MainConatiner";



export default function ({ user }) {
   const { query } = useRouter()
   console.log(user);


   return (
      <MainConatiner keywords={user.title}>
         < h1 > Пользователь c id  {query.id}  </h1 >
         <h2>titile:  {user.title}</h2>
      </ MainConatiner >
   )
}


export async function getServerSideProps({ params }) {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
   const user = await response.json()
   console.log(user);
   console.log(params);
   return {
      props: { user }, // will be passed to the page component as props
   }
}
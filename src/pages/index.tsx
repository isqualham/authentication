import type { NextPage } from 'next'
import { FormEvent, useContext, useState } from 'react'

import styles from '../styles/global.module.css'
import { AuthContext } from '../contexts/AuthContext';
import {withSSRGuest} from '../utils/withSSRGuest';

const Home: NextPage = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext)

  async function handleSubmit(event: FormEvent){
    
    event.preventDefault();

    const data = {
      email,
      password,
    }

    await signIn(data);

  }


  return (

    <form onSubmit={handleSubmit} className={styles.container}>

      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />< br />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button type="submit"> Entrar </button>

    </form>   
    
  )
};export default Home

export const getServerSideProps = withSSRGuest(async (ctx) => {
  //ver todos os cookies
  //console.log(ctx.req.cookies)
  return{
    props:{}
  }
})

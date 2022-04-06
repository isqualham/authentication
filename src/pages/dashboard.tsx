import { useContext, useEffect } from "react";
import { Can } from "../components/can";
import { AuthContext } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan";
import { setupApiClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard (){

    const {user, signOut} = useContext(AuthContext)

    /* const useCanSeeMetrics = useCan({
        permissions: ['metrics.list']
    }) */
    
    useEffect(() =>{
        api.get('/me')
        .then(response => console.log(response))
    },[])

    return(
        <>
            <h1>Dashboard {user?.email}</h1>

            <button onClick={signOut}>sair</button>

            {/* {useCanSeeMetrics && <p>Métricas</p>} */}

            <Can permissions={['metrics.list']}>
                <p>Métricas</p>
            </Can>

            
        </>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    //ver todos os cookies
    //console.log(ctx.req.cookies)

    const apiClient = setupApiClient(ctx);
    const response = await apiClient.get('/me')        
    
    return{
      props:{}
    }
  })

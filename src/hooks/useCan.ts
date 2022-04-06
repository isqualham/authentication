import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validadeUserPermissions } from "../utils/validadeUserPermissions";

type UseCanPrams = {
    permissions?: string[];
    roles?: string[];
}

export function useCan({permissions, roles}: UseCanPrams){

    const {user ,isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
        return false;
    }

    const userHasValidPermission = validadeUserPermissions({
        user, permissions, roles
    })

    return userHasValidPermission;
    
}
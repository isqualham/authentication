import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

interface CanProps{
    children: ReactNode;
    permissions?: string[];
    roles?: string[];
}

export function Can({children, permissions, roles}:CanProps){

    const useCanSeeComponents = useCan({permissions, roles})

    if(!useCanSeeComponents){
        return null;
    }

    return(
        <>
            {children}
        </>



    );
}
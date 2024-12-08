import Cookies from 'js-cookie'
import { ReactNode } from 'react';

type Children = {
    children: ReactNode
}

export const AuthProvider = ({children}: Children) => {
    const token = Cookies.get('access_token');
    
    if(token){
        
    }else{

    }
    
    return (
        <div>
            {children}
        </div>
    )
}
import { setCookie,parseCookies,destroyCookie } from "nookies";

export const setAuthUser = (userData) =>{
  
    setCookie(null, 'token',userData, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    return ;
}

export const getAuthUser = ()=>{
    const cookies = parseCookies()
    //console.log("cookies",cookies)
    if(cookies?.token){
        let user = cookies?.token
        return user
    } 
}

export const logOut = ()=>{
    destroyCookie(null, 'token')
    return ;
}
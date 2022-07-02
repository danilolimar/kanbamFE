import { createContext, useCallback, useEffect, useState } from "react";

const Context = createContext();

function AuthProvider({ children }){

    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    // const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    // const [userRoles, setUserRoles] = useState([]);

    const handleLogin = useCallback( async (response) => {

        // setUserId(response.data.user.id);
        setUserName(response.data.user.fullName);
        // setUserRoles(response.data.user.roles);

        setAuthenticated(true);

    }, [
        // userId,
        // userName,
        // userRoles,
        authenticated
    ]);

    const handleLogout = useCallback( async () => {

        setAuthenticated(false);

    }, []);

    // const getToken = useCallback( async () => {

    //     if(token){
    //         try{
    //             const response = await getUser(token);
    //             setUserId(response.data.id);
    //             setUserName(response.data.fullName);
    //             setSubCompany(response.data.listSubCompany);
    //             setUserRoles(response.data.roles);
    //             setAuthenticated(true);
    //             setLoading(false);
    //         }catch(err){
    //             setAuthenticated(false);
    //             setLoading(false);
    //         }
    //     }else{
    //         setLoading(false);
    //     }

    // }, [])

    // useEffect(() => {

    //     getToken();

    // }, [])

    return (
        <Context.Provider 
            value={{
                loading,
                authenticated, 
                handleLogin,
                handleLogout,
                // userId, 
                // userName,
                // userRoles
            }}>

            { children }

        </Context.Provider>
    )

}

export { Context, AuthProvider };
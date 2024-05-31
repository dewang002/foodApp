import { createContext } from "react";

const UserContext= createContext({
    loggedIn:"guest"
})
export default UserContext;
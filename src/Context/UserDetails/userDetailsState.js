import { useState, useEffect } from "react";
import { userDetailsContext } from "../contexts";


const UserDetailsState = (props) => {

    const initialUserDetails = {
        user: "",
        email: "",
        _id: ""
    }


    const [user, setUserDeatils] = useState(initialUserDetails)

    return (
        <userDetailsContext.Provider value={{ user, setUserDeatils }}>
            {props.children}
        </userDetailsContext.Provider>
    )
}


export default UserDetailsState;

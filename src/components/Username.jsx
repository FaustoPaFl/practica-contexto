import React from "react";
import { UserContext } from "../App";

 export const UserName = () => {
    const value = React.useContext(UserContext);
    return <h1>{value}</h1>;
}
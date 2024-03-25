import React, {useEffect, useState} from "react";

export default function Signup(){
    const [myForm, setMyForm] = useState({
        userName : "",
        password : ""
    })

    const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyForm((previous) => ({
            ...previous,//deconstructs previous values
            [event.target.name]: event.target.value
        }))
    };
    useEffect(() => {
        console.log("Save Fields")
        console.log(myForm)
        
    })

    const submit = (e) =>{
        e.preventDefault()
        const target = e.target;
        console.log("Getting what target does")
        console.log(e.target[0].value)
        console.log(e.target[1].value)
    } 

    return(
    <>
    <h2>Sign Up Form</h2>
    <form action="" method="" onSubmit={submit}>
        <input type="text" name="userName " id="s_userName" onChange={saveFields} />
        <input type="password" name="password" id="s_password" onChange={saveFields} />

        <input type="submit" value="Submit" />

    </form>
    
    </>
    );
}






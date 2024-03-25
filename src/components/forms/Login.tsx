import React, {useEffect, useState} from "react";

export default function Login(){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [myForm, setMyForm] = useState({})


    const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyForm((previous) => ({
            ...previous,//deconstructs previous values
            [event.target.name]: event.target.value
        }))
    };
    useEffect(() => {
        console.log(myForm)
        
    })



    const submit = (e) =>{
        e.preventDefault()
        const target = e.target;
        console.log(target.userName.value)
        console.log(target.password.value)
    } 

    return(
    <>
    <h2>Login Form</h2>
    <form action="" method="" onSubmit={submit}>
        <input type="text" name="userName " id="userName" onChange={(e) => setUserName(e.target.value)} />
        <input type="password" name="lastName" id="password" onChange={(e) => setPassword(e.target.value)} />

        <input type="submit" value="Submit" />

    </form>
    
    </>
    );
}






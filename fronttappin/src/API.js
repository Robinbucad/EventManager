import { useState } from "react"

export function usePutData(){

    const [register,setRegistered] = useState("Register")

    const addAssistant = async(url,assistant) => {
        try{
            const res = await fetch(url,{
                method:'PUT',
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(assistant)
            })
            if(res.status === 201){
                window.location.reload(false)
                alert("You have been added")
                setRegistered("Added Successfully")
            }
            if(res.status === 500){
                alert("Event doesn't exist")
            }
        }catch(err){
            alert(err)
        }
    } 

    return {addAssistant,register}
}
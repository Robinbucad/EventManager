export function usePutData(){
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
                alert("You have been added to this event")
                window.location.reload(false)
            }
            if(res.status === 500){
                alert("Event doesn't exist")
            }
        }catch(err){
            alert(err)
        }
    } 

    return {addAssistant}
}
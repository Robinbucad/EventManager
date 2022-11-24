import { useEffect, useState } from 'react';
import { usePutData } from '../../API';
import './style.css'

function FormPage() {

  const {addAssistant, register} = usePutData()
  const [disable, setDisabled] = useState(true)

  const [checkEventName, setCheckEventName] = useState(false)
  const [checkName, setCheckName] = useState(false)
  const [checkSurname, setCheckSurname] = useState(false)
  const [checkEmail, setCheckEmail] = useState(false)


  const checkBtn = e => {
    if(e.target.value !== " " && e.target.id ==="eventName") setCheckEventName(true)
    if(!e.target.value && e.target.id ==="eventName") setCheckEventName(false)

    if(e.target.value !== " " && e.target.id === "name") setCheckName(true)
    if(!e.target.value && e.target.id === "name") setCheckName(false)

    if(e.target.value !== " " && e.target.id === "surname") setCheckSurname(true)
    if(!e.target.value && e.target.id === "surname") setCheckSurname(false)

    if(e.target.value !== " " && e.target.id === "email") setCheckEmail(true)
    if(!e.target.value && e.target.id === "email") setCheckEmail(false)


    if(checkEventName === true 
      && checkName === true 
      && checkSurname === true 
      && checkEmail === true )
      {
        setDisabled(false)
      }else setDisabled(true)
      
  }
  
  

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    addAssistant('http://localhost:5000/api/events/', Object.fromEntries(formData))
    setDisabled(true)
  }



  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <div className='inputDiv'>
        <label htmlFor='eventName'>Event name *</label>
        <input onChange={checkBtn} className='inputStyle' type='text' placeholder="Enter event name" id='eventName' name='EventName' required/>
      </div>

      <div className='personalInfoDiv'>
        <div className='divName'>
            <label htmlFor='name'>Name *</label>
            <input onChange={checkBtn} className='inputStyle'  type='text' placeholder="Enter name" id='name' name='Name' required />
          </div> 

          <div className='divSurname' >
            <label htmlFor='surname'>Surname *</label>
            <input onChange={checkBtn} className='inputStyle' type='text' placeholder="Enter surname" id='surname' name='Surname' required />
          </div>
      </div>

      <div className='inputDiv'>
        <label htmlFor='email'>Email *</label>
        <input onChange={checkBtn} className='inputStyle' type='email' placeholder="Enter email" id='email' name='Email' required/>
      </div>

      <div className='inputDiv'>
        <label htmlFor='phone'>Phone</label>
        <input className='inputStyle' type='text' placeholder="Enter phone(Optional)" id='phone' name='Phone' />
      </div>

      
        <button className='btnCreate' disabled={disable}>{register}</button>
      

      </form>
      
      

    
  );
}

export default FormPage;
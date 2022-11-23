import { usePostData } from '../../API';
import './style.css'

function FormPage() {

  const {addAssistant} = usePostData()

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    addAssistant('http://localhost:5000/api/events/', Object.fromEntries(formData))
  }

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <div className='inputDiv'>
        <label htmlFor='eventName'>Event name *</label>
        <input className='inputStyle' type='text' placeholder="Enter event name" id='eventName' name='EventName' required/>
      </div>

      <div className='personalInfoDiv'>
        <div className='divName'>
            <label htmlFor='name'>Name *</label>
            <input className='inputStyle'  type='text' placeholder="Enter name" id='name' name='Name' required />
          </div> 

          <div className='divSurname' >
            <label htmlFor='surname'>Surname *</label>
            <input className='inputStyle' type='text' placeholder="Enter surname" id='surname' name='Surname' required />
          </div>
      </div>

      <div className='inputDiv'>
        <label htmlFor='email'>Email *</label>
        <input className='inputStyle' type='email' placeholder="Enter email" id='email' name='Email' required/>
      </div>

      <div className='inputDiv'>
        <label htmlFor='phone'>Phone</label>
        <input className='inputStyle' type='text' placeholder="Enter phone(Optional)" id='phone' name='Phone' />
      </div>

      
        <button className='btnCreate'>Register</button>
      

      </form>
      
      

    
  );
}

export default FormPage;
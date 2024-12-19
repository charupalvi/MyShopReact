import React, { useState } from 'react';
import './RegistrationForm.css';

export default function RegistrationForm() {
  const [regForm, setRegForm] = useState({
    username: '',
    email: '',
    address: '',
    country: '',
    accepted: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(regForm),
      });

      if (response.ok) {
        setSubmitted(true);
        alert('Registration Successful!');
        resetForm();
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('There was an error. Please try again later.');
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setRegForm((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => {
    setRegForm({
      username: '',
      email: '',
      address: '',
      country: '',
      accepted: false,
    });
    setSubmitted(false);
  };

  return (
    <div className="registration-container">
      <h2 className="form-header">Register Here</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <InputField label="Username" type="text" name="username" value={regForm.username} onChange={handleChange} />
        <InputField label="Email" type="email" name="email" value={regForm.email} onChange={handleChange} />
        <TextAreaField label="Address" name="address" value={regForm.address} onChange={handleChange} />
        <SelectField label="Country" name="country" value={regForm.country} onChange={handleChange} />
        <CheckboxField
          label="I agree to the terms and conditions"
          name="accepted"
          checked={regForm.accepted}
          onChange={handleChange}
          
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {submitted && <p className="success-message">Thank you for registering!</p>}
    </div>
  );
}

// Reusable components:
const InputField = ({ label, type, name, value, onChange }) => (
  <div className="form-group">
    <label>{label}:</label>
    <input type={type} name={name} value={value} onChange={onChange} required />
  </div>
);

const TextAreaField = ({ label, name, value, onChange }) => (
  <div className="form-group">
    <label>{label}:</label>
    <textarea name={name} value={value} onChange={onChange} required />
  </div>
);

const SelectField = ({ label, name, value, onChange }) => (
  <div className="form-group">
    <label>{label}:</label>
    <select name={name} value={value} onChange={onChange} required>
      <option value="">--Select Country--</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="Australia">Australia</option>
      <option value="Germany">Germany</option>
    </select>
  </div>
);

const CheckboxField = ({ label, name, checked, onChange }) => (
  <div className="form-group checkbox-container">
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <span>{label}</span>
  </div>
);



// Maam Code (running) :-

// import React, { useState } from 'react'

// export default function Registration() {
//     const [regForm,setRegform]= useState({
//         firstName:'',
//         email:'',
//         address:'',
//         country:'',
//         accepted:'false'

//     });
//     console.log(regForm);
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         const url="http://localhost:3000/users";
//         fetch(url,{
//             method:'POST',
//             body:JSON.stringify(regForm)

//         })
//         .then(resp=>resp.json())
//         .then(data=>console.log(data))
//     }
    
//     const handleChange =(event)=>{
//         const key =event.target.name;
//         setRegform({
//             ...regForm,
//             [key]:(event.target.type==="checkbox") ?event.target.checked:event.target.value
//         })
//         // console.log(event.target.name);
        
//     }
    
//   return (
//     <div>
//        <h2>My forms Demo</h2>
//       <form>
//         <div>

//         <label>First Name:</label>
//         <input type="text"  name="firstName"  value={regForm.username} onChange={handleChange} /> <br />
//         </div>
//         <div>
//             <label>Email:</label>
//             <input type="email" name="email" value={regForm.email}  onChange={handleChange}/>
//         </div>
//         <div>
//             <label>Address:</label>
//             <textarea name='address' value={regForm.address} onChange={handleChange}></textarea>
//         </div>
//         <div>
//             <label>Country:</label>
//             <select name='country' onChange={handleChange}>
//                 <option value="">--select country---</option>
//                 <option value="India">India</option>
//                 <option value="Australia">Australia</option>
//                 <option value="Germany">Germany</option>
//                 <option value="Japan">Japan</option>
//                 {/* <option value="India">India</option> */}

//             </select>
            
//         </div>
//         <div>
//             <label>Agree?:</label>
//            <input type='checkbox' name='accepted' onChange={handleChange} />
//         </div>
//         <input type='submit' value="Enter" onClick={handleSubmit}/>
//     </form>
//     {JSON.stringify(regForm)}
//     </div>
//   )
// }
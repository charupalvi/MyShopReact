// using react hook form for error handling and form validation

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';  // Import React Hook Form
import './FormsDemo.css';  // Add your CSS file for styling

export default function FormsDemo() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm(); // Destructure methods from useForm
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitted(false);
    
    

    try {
      const response = await fetch('http://localhost:3000/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();  // Reset form fields after successful submission
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // console.log(watch());

  return (
    <div className="form-container">
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Username Field */}
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            {...register('username', 
              { required: 'Username is required',
                minLength:{
                  value:3,
                  message:'Minimum 3 characters required!'
                }

             })}
            className={errors.username ? 'input-error' : ''}
            placeholder="Enter your username"
          />
          {errors.username && <small className="error-message">{errors.username.message}</small>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email format',
              },
            })}
            className={errors.email ? 'input-error' : ''}
            placeholder="Enter your email"
          />
          {errors.email && <small className="error-message">{errors.email.message}</small>}
        </div>
    <div className="checkbox-group">
      <input 
          type="checkbox" 
          {...register('accepted')} 
          id="consent"
      />
      <label htmlFor="consent" className="checkbox-label">
          I consent to the terms and conditions
      </label>
    </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Success Message */}
      {submitted && <p className="success-message">Form submitted successfully!</p>}
    </div>
  );
}




/*

// using react for error handling and validation

import React, { useState } from 'react';
import './FormsDemo.css';  // Add this for external styling

export default function FormsDemo() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent page refresh
    let validationErrors = {};

    if (!username.trim()) {
      validationErrors.username = 'Username is required!';
    }

    if (!email.trim()) {
      validationErrors.email = 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {  // Basic email format validation
      validationErrors.email = 'Invalid email format!';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/customer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          alert('Submitted Successfully');
          setUsername('');
          setEmail('');
        } else {
          alert('Failed to submit data.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Form Demo</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={errors.username ? 'input-error' : ''}
            placeholder="Enter your username"
            required
          />
          {errors.username && <small className="error-message">{errors.username}</small>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
            placeholder="Enter your email"
            required
          />
          {errors.email && <small className="error-message">{errors.email}</small>}
        </div>

        <button type="submit" disabled={isLoading || !username || !email}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {submitted && <p className="success-message">Form submitted successfully!</p>}
    </div>
  );
}

*/



/*

// uisng basic html5 for error handling

import React, { useState } from 'react';

export default function FormsDemo() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [error,setErrors] = useState(null);

  console.log(username,email);
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    setErrors(null);
    if(username==='' || username===null){
      setErrors({'username':'username is required!!'})
    }
    return;
    alert(`Submitted Username: ${username}`);
  };

  return (
    <div>
      <h2>Form Demo</h2>
      <form onSubmit={handleSubmit} >
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            
          /> 
           <strong style={{color:'red'}}>{error && error.username}</strong>
        </label> <br /><br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            
          />
        </label> <br /><br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {username} <br />
        {email}
      </div>
    </div>
  );
}


*/
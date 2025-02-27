import React, { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [occupation, setOccupation] = useState('');
  const [cartype, setCartype] = useState('');
  const [downpaymen, setDownpayment] = useState('');
  const [monthlyPaid, setMonthlyPaid] = useState('');
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !mobileNumber || !city || !occupation || !cartype || !downpaymen || !monthlyPaid) {
      setNotification('Please fill in all fields');
    } else {
      setNotification('Form submitted successfully');
      // You can add your form submission logic here
      console.log('Form submitted');
    }
  };

  return (
    <div className='container'>
      <div className='main'>
        <header className='header'>
          <h1><span>Driftech </span> Registration Form</h1>
        </header>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <h3>Personal information:</h3>
            <div>
              <label className='label'><p>Full Name:</p></label>
              <input
                placeholder='Mo Salah'
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className='label'><p>Email:</p></label>
              <input
                placeholder='mo.salah@gmail.com'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className='label'><p>Mobile Number:</p></label>
              <input
                placeholder='01234567890'
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className='label'><p>City:</p></label>
              <input
                placeholder='Cairo'
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            
            <label className='label'>Occupation Type: </label>
            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Employee">Employee</option>
              <option value="Self Employed">Self Employed</option>
              <option value="House Wife">House Wife</option>
            </select>
            
            <h3>Car details:</h3>
            <div>
              <label className='label'><p>Car type:</p></label>
              <input
                placeholder='Mercedes, BMW'
                type="text"
                value={cartype}
                onChange={(e) => setCartype(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='label'><p>Down-payment:</p></label>
              <input
                placeholder='500,000'
                type="number"
                value={downpaymen}
                onChange={(e) => setDownpayment(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='label'><p>Maximum monthly paid:</p></label>
              <input
                placeholder='50,000'
                type="number"
                value={monthlyPaid}
                onChange={(e) => setMonthlyPaid(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
            {notification && (
              <p style={{ color: notification.includes('successfully') ? 'green' : 'red' }}>
                {notification}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
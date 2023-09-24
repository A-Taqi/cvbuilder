// GeneralInfo.js
import React from 'react';
import FormSection from './FormSection';

function GeneralInfo({ info, onSubmit }) {
  // Define state for the input fields
  const [email, setEmail] = React.useState(info.email ?? '');
  const [phone, setPhone] = React.useState(info.phone ?? '');
  const [fullName, setFullName] = React.useState(info.fullName ?? '');

  // Function to gather data and send it to the parent component
  const handleFormSubmit = () => {
    // Call the onSubmit function with the data
    onSubmit({ email, phone, fullName });
  };

  return (
    <FormSection title="General Information" onSubmit={handleFormSubmit}>
      <div className="form-container">
        <div className="form-row">
          <label>Name</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
    </FormSection>
  );
}

export default GeneralInfo;

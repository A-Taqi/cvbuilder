// FormSection.js
import React from 'react';
import '../styles/Form.css';
import FormSectionEntry from './FormSectionEntry';

function FormSection({ children, title, onSubmit, multi=false, records=[] }) {
  // Function to handle the form submit
  const handleSubmit = () => {
    // Call the onSubmit function passed from the parent component
    onSubmit();
  };

  const handleDelete = (index) => {
    alert('How dare you delete ' + index);
  }

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-contents">
        {multi ? 
          records.map((item, index) => {
            return <FormSectionEntry title={item.title} key={index} onDelete={() => handleDelete(index)}/>
          })
          :
          children
        }
      </div>
      <div className="card-actions">
        <button className="card-action-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormSection;

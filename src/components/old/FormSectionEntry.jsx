import React from 'react';
import '../styles/Form.css';
import {BsTrash} from 'react-icons/bs';

function FormSectionEntry ({title, onDelete}) {
    const handleDelete = () => {
        onDelete();
    };

    return (
    <>
        <div className="form-record-entry">
            <span>{title}</span>
            <button className="form-record-entry-delete" onClick={handleDelete}><BsTrash size={25}/></button>
        </div>
    </>
    )
}

export default FormSectionEntry;
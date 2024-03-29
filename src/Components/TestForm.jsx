import React from 'react';
import MainForm from './MainForm/MainForm';

export default function TestForm() {
    
    const formTemplate = {
        title: 'Test Form',
        fields: [
            {
                title: 'Name',
                type: 'text',
                name: 'fname',
                id: 'fname',
                placeholder: 'John Doe',
                validationProps: {
                    required: 'Name is required'
                }
            },
            {
                title: 'Phone Number',
                type: 'tel',
                name: 'telephone',
                id: 'telephone',
                placeholder: '08012345678',
                validationProps: {
                    required: 'Name is required',
                    maxLength: '11',
                    pattern: '/[0-9]{3}[0-9]{4}[0-9]{4}/i',
                }
            },
            {
                title: 'Your Email',
                type: 'email',
                name: 'email',
                id: 'email',
                placeholder: 'sample@email.com',
                validationProps: {
                    required: 'email is required',
                }
            },
            {
                title: 'Your Location',
                type: 'text',
                name: 'location',
                id: 'location',
                placeholder: 'Lagos, Nigeria',
            },
        ]
    }

    function onSubmit(values) {
        console.log('child form')
        console.log(values)
    }

    return (
        <MainForm 
            formTemplate={formTemplate}
            onSubmit={onSubmit}
        />  
    )
}


import React from 'react';
import MainForm from '../MainForm/MainForm';

export default function SupportAChildForm() {

    const formTemplate = {
        title: 'Sponsor A Child Form',
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
            {
                title: 'Amount in Naira',
                type: 'number',
                name: 'amount',
                id: 'amount',
                placeholder: '100,000',
            },
            {
                title: 'Preferred Age Range',
                type: 'number',
                name: 'agerange',
                id: 'agerange',
                placeholder: '5years - 12years',
                value1: '2years - 5years',
                value2: '5years - 12years',
                value3: '12years - 18years',
                value4: '18years - 22years',
            },
            {
                title: 'Additional Information',
                type: 'text',
                name: 'additionalinfo',
                id: 'additionalinfo',
                placeholder: 'Additional Information',
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

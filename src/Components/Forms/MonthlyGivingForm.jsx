import React from 'react';
import MainForm from '../MainForm/MainForm';

export default function MonthlyGivingForm() {

    const formTemplate = {
        title: 'Monthly Giving Form',
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
                title: 'Phone Number',
                type: 'tel',
                name: 'telephone',
                id: 'telephone',
                placeholder: '08012345678',
            }, 
            {
                title: 'Your Location',
                type: 'text',
                name: 'location',
                id: 'location',
                placeholder: 'Lagos, Nigeria',
            },
            {
                title: 'Donation Cause',
                type: 'text',
                name: 'additionalinfo',
                id: 'donationcause',
                placeholder: 'Reason or purpose for donating.',
            },
            {
                title: 'Amount in Naira',
                type: 'number',
                name: 'amount',
                id: 'amount',
                placeholder: '10,000',
            }    
        ]
    }

    function onSubmit(values) {
        console.log('MonthlyGivingForm')
        console.log(values)
    }

    return (
        <MainForm 
            formTemplate={formTemplate}
            onSubmit={onSubmit}
        /> 
    )
}

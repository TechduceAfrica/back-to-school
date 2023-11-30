import React from 'react';
import TestForm from '../Components/TestForm';
import SupportAChildForm from '../Components/Forms/SupportAChildForm';
import DonateNowForm from '../Components/Forms/DonateNowForm';
import MonthlyGivingForm from '../Components/Forms/MonthlyGivingForm';

export default function TestFormPage() {
  return (
    <div>
      <TestForm/>
      <SupportAChildForm/>
      <DonateNowForm/>
      <MonthlyGivingForm/>
    </div>
  )
}

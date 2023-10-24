import React, { useState } from 'react';
import DigitalLibraryContent from '../Contents/DigitalLibrary'

export default function Accordion() {
  const [toggle, setToggle] = useState(null);

  const handleToggle = (id) => {
    setToggle((prevState) => (prevState === id ? null : id));
  };

  return (
    <div>
      <div onClick={() => handleToggle(1)}>{DigitalLibraryContent.DigitalLibrarySectionThreeTitleOne}</div>
      {toggle === 1 && <div>{DigitalLibraryContent.DigitalLibrarySectionThreeTextOne}</div>}

      <div onClick={() => handleToggle(2)}>Accordion Header 2</div>
      {toggle === 2 && <div>Accordion Body 2</div>}

      <div onClick={() => handleToggle(3)}>Accordion Header 2</div>
      {toggle === 2 && <div>Accordion Body 2</div>}

      <div onClick={() => handleToggle(4)}>Accordion Header 2</div>
      {toggle === 2 && <div>Accordion Body 2</div>}
    </div>
  );
}
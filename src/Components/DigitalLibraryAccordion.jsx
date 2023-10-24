import React from 'react';
import DigitalLibraryContent from '../Contents/DigitalLibrary'
import '../Stylesheet/DigitalLibraryAccordion.css'

export default function DigitalLibraryAccordion () {

  return (
    <div>
      <section role="group">
        <details name="accordion">
          <summary>{DigitalLibraryContent.DigitalLibrarySectionThreeTitleOne}</summary>
          <span>
            {DigitalLibraryContent.DigitalLibrarySectionThreeTextOne}
          </span>
        </details>
        <details name="accordion">
          <summary>Accordion</summary>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            et sed consectetur aperiam repellendus, accusantium, facere id earum
            omnis autem aspernatur perferendis labore ad obcaecati eveniet quasi
            fuga nemo qui.
          </span>
        </details>
        <details name="accordion">
          <summary>Pattern</summary>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            et sed consectetur aperiam repellendus, accusantium, facere id earum
            omnis autem aspernatur perferendis labore ad obcaecati eveniet quasi
            fuga nemo qui.
          </span>
        </details>
      </section>
    </div>
  );
};


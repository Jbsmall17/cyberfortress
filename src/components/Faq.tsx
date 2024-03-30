import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

interface AccordionItem {
  heading: string;
  content: string;
}

const Accordion: React.FC = () => {
  const accordionData: AccordionItem[] = [
    { heading: 'What is cyberfortress?', 
        content: 'Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim.' 
    },
    { heading: 'What is cyberfortress?', 
        content: 'Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim.' 
    },
    { heading: 'What is cyberfortress?', 
        content: 'Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim.' 
    },
    { heading: 'What is cyberfortress?', 
        content: 'Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim.' 
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

    useEffect(() => {
        Aos.init();
    },[])

  return (
    <div className='accordion-container'>
        <h1 className="faq-subheading">
            Cyberfortress Faq
        </h1>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item" data-aos="fade-up">
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <h3>{item.heading}</h3>
            {expandedIndex === index ? <FaMinus /> : <FaPlus />}
          </div>
          {expandedIndex === index && <div className="accordion-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

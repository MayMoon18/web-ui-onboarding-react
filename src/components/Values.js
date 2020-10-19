import React, { useState }from 'react'

import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

import './styles/Values.css';

import Footer from '../components/shared/Footer';

function Values() {
	const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
	};

	return (
<div className='values_background'>
      <div className='values_container'>
        <div className='values-accordion-container'>
          <Accordion id='values-accordion-1' expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              className='values-accordion-summary'
            >
              Excellence in your Work
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li><strong>F</strong>ocused</li>
                <li><strong>C</strong>ommited</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion id='values-accordion-2' expanded={expandedPanel === 'panel2'} onChange={handleAccordionChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              className='values-accordion-summary'
            >
              Act Ethically
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                  <li>
                    <strong>I</strong>ntegrity
                  </li>
                </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion id='values-accordion-3' expanded={expandedPanel === 'panel3'} onChange={handleAccordionChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              className='values-accordion-summary'
            >
              Constantly Innovate | Think Big
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <strong>F</strong>ast Learner
                </li>
                <li>
                  <strong>C</strong>lear Thinker
                </li>
                <li>
                  <strong>I</strong>nnovative
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion id='values-accordion-4' expanded={expandedPanel === 'panel4'} onChange={handleAccordionChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              className='values-accordion-summary'
            >
              Team Player | Have Fun
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li><strong>F</strong>lexible</li>
                <li><strong>C</strong>ollaborative</li>
                <li><strong>I</strong>nclusive</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer backUrl='triforce' nextUrl='' />
    </div>
	)
}

export default Values;
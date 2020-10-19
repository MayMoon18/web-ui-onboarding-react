import React, { useState } from 'react';

import { ExpandMore } from '@material-ui/icons';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

import './styles/CareerPath.css';

import Footer from '../components/shared/Footer';

function CareerPath() {
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <div className='career-path_background'>
      <div className='career-path_container'>
        <div className='accordion-container'>
          <Accordion
            id='accordion-1'
            expanded={expandedPanel === 'panel1'}
            onChange={handleAccordionChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              className='accordion-summary'
            >
              SENIOR MGMT
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>CTO</li>
                <li>STUDIO PARTNER | VP TECH</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            id='accordion-2'
            expanded={expandedPanel === 'panel2'}
            onChange={handleAccordionChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              className='accordion-summary'
            >
              EXPERT & MGM
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul>
                  <li>
                    <strong>L6</strong> SUBJECT MATTER EXPERT
                  </li>
                  <li>
                    <strong>L5</strong> SUBJECT MATTER EXPERT
                  </li>
                  <li>
                    <strong>L4</strong> SUBJECT MATTER EXPERT
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <strong>L6</strong> TECHNICAL DIRECTOR
                  </li>
                  <li>
                    <strong>L5</strong> TECHNICAL DIRECTOR
                  </li>
                  <li>
                    <strong>L4</strong> TECHNICAL DIRECTOR
                  </li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            id='accordion-3'
            expanded={expandedPanel === 'panel3'}
            onChange={handleAccordionChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              className='accordion-summary'
            >
              SENIOR
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <strong>L3</strong> ARCHITECT
                </li>
                <li>
                  <strong>L2</strong> SOFTWARE DESIGNER
                </li>
                <li>
                  <strong>L1</strong> SENIOR
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            id='accordion-4'
            expanded={expandedPanel === 'panel4'}
            onChange={handleAccordionChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              className='accordion-summary'
            >
              INITIAL AND MID LEVEL
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>SEMI SENIOR ADV</li>
                <li>SEMI SENIOR</li>
                <li>JUNIOR ADV</li>
                <li>JUNIOR</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer backUrl='imagine' nextUrl='triforce' />
    </div>
  );
}

export default CareerPath;

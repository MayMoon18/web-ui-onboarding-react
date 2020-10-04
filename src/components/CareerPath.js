import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMore from '@material-ui/icons/ExpandMore'

import './styles/CareerPath.css'

import Footer from '../components/shared/Footer'

function CareerPath() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <React.Fragment>
      <div className='career-path_container'>
        <div className='accordion-container'>
          <Accordion id='accordion-1'>
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
          <Accordion id='accordion-2'>
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
          <Accordion id='accordion-3'>
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
          <Accordion id='accordion-4'>
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
      <Footer backUrl="imagine" nextUrl="/"/>
    </React.Fragment>
  )
}

export default CareerPath;

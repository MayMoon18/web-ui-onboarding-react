import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact';
import Footer from './shared/Footer';

import './styles/Studios.css';

import strategic from './../images/classes-studios/strategic_classes_studios.svg';
import specialty from './../images/classes-studios/specialty_classes_studios.svg';
import foundation from './../images/classes-studios/foundation_classes_studios.svg';
import globantLogo from './../images/Globant-logo.png';

function Studios() {
  return (
    <React.Fragment>
      <div className='carousel_title'>
        <img src={globantLogo} alt='Globant Logo' width='12%' />
        <h1>Classes - Studios</h1>
      </div>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src={strategic}
                  alt='strategic'
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h2 className='h2-responsive'>STRATEGIC</h2>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src={specialty}
                  alt='Specialty'
                />
                <MDBMask overlay='black-strong' />
              </MDBView>
              <MDBCarouselCaption>
                <h2 className='h2-responsive'>SPECIALTY</h2>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src={foundation}
                  alt='Foundation'
                />
                <MDBMask overlay='black-slight' />
              </MDBView>
              <MDBCarouselCaption>
                <h2 className='h2-responsive'>FOUNDATION</h2>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <Footer backUrl='imagine' nextUrl='career-path' />
    </React.Fragment>
  );
}

export default Studios;

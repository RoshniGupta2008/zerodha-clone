import React from 'react';
import Navbar from '../Navbar';
import Brokerage from './Brokerage';
import Hero from './Hero';
import Footer from '../Footer';
import OpenAccount from "../OpenAccount";
function PricingPage() {
    return ( 
        <>
          <Hero />
          <OpenAccount />
          <Brokerage />  
        </>
        
     );
}

export default PricingPage;
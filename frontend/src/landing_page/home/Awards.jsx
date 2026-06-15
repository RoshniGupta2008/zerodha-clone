import React from 'react';
function Awards() {
    return ( 
        <div className="container mt-5">
         <div className="row">
            <div className="col-6  p-5">
                <img src="media/images/largestBroker.svg" alt="" />
            </div>
            <div className="col-6 p-5 mt-5">
                <h1>Largest stock broker in India</h1>
                <p className='mb-5'>
                    India’s leading discount broker empowering millions of investors with seamless trading and investing across multiple asset classes.
                </p>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>Futures & Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className="col-6">
                           <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds & Government securities</li>
                        </ul>
                    </div>
                </div>
                <img src="media/images/pressLogos.png"style={{width: "100%"}} alt="Logo" />
            </div>
         </div>
        </div>
     );
}

export default Awards;
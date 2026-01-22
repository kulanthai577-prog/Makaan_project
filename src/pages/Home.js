import h1 from './img/carousel-1.jpg';
import h2 from './img/carousel-2.jpg';

import pt1 from './img/icon-apartment.png';
import pt2 from './img/icon-villa.png';
import pt3 from './img/icon-house.png';
import pt4 from './img/icon-housing.png';
import pt5 from './img/icon-building.png';
import pt6 from './img/icon-luxury.png';
import pt7 from './img/icon-condominium.png';
import pt8 from './img/icon-neighborhood.png';

import abt from './img/about.jpg';

import pr1 from './img/property-1.jpg';
import pr2 from './img/property-2.jpg';
import pr3 from './img/property-3.jpg';
import pr4 from './img/property-4.jpg';
import pr5 from './img/property-5.jpg';
import pr6 from './img/property-6.jpg';


const Home=()=>{
    return(
        <>
{/* home section  */}
        <div className='Home'>

            <div className='home-text'>
                <h1>Find A <span>Perfect Home</span> <br/> To Live With Your <br/> Family</h1>
                <p>lorem Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                    Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr
             </p>
             <button>GET STARTED</button>
            </div>

            <div>
                 <img src={h1} style={{width:'100%', height:'600px'}}/>
                 <img src={h2} style={{width:'100%', height:'600px'}}/>
            </div>
        
        </div>

{/* types section */}
    
    <div className='button1'>
        <label> <input type='text' placeholder='Search Keyword' /> </label>
        <label >
            <select >
                <option >Property Type</option>
                <option >Property Type 1</option>
                <option >Property Type 2</option>
                <option >Property Type 3</option>
            </select> 
        </label>
         <label >
            <select >
                <option >Location</option>
                <option >Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
            </select> 
        </label>
         <label> <button type='submit' className='b1'>Search</button></label>
        
    </div>

{/* type list section  */}

        <div className='type'>
            <h1>Property Types</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolorEirmod sed ipsum dolor sit rebum labore magna erat.  duo.</p>
        </div>

        <div className='pt'>
            <div className='pt-card'>
                <label><img src={pt1} /></label>
                <h6>Apartment</h6>
                <p>123 Properties</p>
            </div>
            <div className='pt-card'>
                <label><img src={pt2} /></label>
                <h6>Villa</h6>
                <p>123 Properties</p>
            </div>
            <div className='pt-card'>
                <label><img src={pt3} /></label>
                <h6>Home</h6>
                <p>123 Properties</p>
            </div>
            <div className='pt-card'>
               <label><img src={pt4} /></label>
                <h6>Office</h6>
                <p>123 Properties</p>
            </div>
            <div className='pt-card'>
                <label><img src={pt5} /></label>
                <h6>Townhouse</h6>
                <p>123 Properties</p>
            </div>
            <div className='pt-card'>
               <label><img src={pt6} /></label>
                <h6>Shop</h6>
                <p>123 Properties</p>
            </div>
            <div className='pt-card'>
                <label><img src={pt7} /></label>
                <h6>Building</h6>
                <p>123 Properties</p>
            </div>
            <div className='pt-card'>
               <label><img src={pt8} /></label>
                <h6>Garage</h6>
                <p>123 Properties</p>
            </div>
        </div>

{/* perfect property */}
        <div className='perfect'>
            <div className='perfect-img'>
                <img src={abt} style={{width:'90%', height:'600px'}} />

            </div>
            <div className='perfect-text'>
                <h1>#1 Place To Find The </h1> <h1> Perfect Property</h1>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br/> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br/> sed stet lorem sit clita duo justo magna dolore erat amet</p>

                <h6> <i class="fa-solid fa-asterisk"></i>Tempor erat elitr rebum at clita</h6>
                <h6><i class="fa-solid fa-asterisk"></i>Aliqu diam amet diam et eos</h6>
                <h6><i class="fa-solid fa-asterisk"></i>Clita duo justo magna dolore erat amet</h6>
                <button>Read More</button>

            </div>
        </div>
{/* property listing */}
        <div className='property-list'>
            <div className='list-text'>
                <h1>Property Listing</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat.<br/> Tempor sit eirmod sit diam justo sed rebum.</p>
            </div>
            <div className='list-btn'>
                <button>Featured</button>
                 <button>For Sell</button>
                  <button>For Rent</button>
            </div>
        </div>

            {/* CARD 1 */}

        <div className="property-card">

            <div className="card ">
                    <div className="property-img">
                        <img src={pr1} className="img-fluid" alt="House" />
                            <span className="badge-sell">For Sell</span>
                            <span className="badge-type">Apartment</span>
                    </div>

                <div className="card-body">
                        <div className="price">$12,345</div>
                        <h5 className="fw-bold mt-2">Golden Urban House For Sell</h5>
                        <p className="text">
                            <i class="fa-solid fa-location-crosshairs"></i>123 Street, New York, USA</p>
                    <hr />

                    <div className="row text-center features">
                      <div className="col-4"><i class="fa-brands fa-algolia"></i> <br />  1000 Sqft </div>
                        
                      <div className="col-4"><i className="fa-solid fa-bed"></i><br />3 Bed </div>
                        
                      <div className="col-4"><i class="fa-solid fa-bath"></i><br />2 Bath  </div>
                    </div>

                </div>
            </div>

             <div className="card ">
                    <div className="property-img">
                        <img src={pr1} className="img-fluid" alt="House" />
                            <span className="badge-sell">For Sell</span>
                            <span className="badge-type">Apartment</span>
                    </div>

                <div className="card-body">
                        <div className="price">$12,345</div>
                        <h5 className="fw-bold mt-2">Golden Urban House For Sell</h5>
                        <p className="text">
                            <i class="fa-solid fa-location-crosshairs"></i>123 Street, New York, USA</p>
                    <hr />

                    <div className="row text-center features">
                      <div className="col-4"><i class="fa-brands fa-algolia"></i> <br />  1000 Sqft </div>
                        
                      <div className="col-4"><i className="fa-solid fa-bed"></i><br />3 Bed </div>
                        
                      <div className="col-4"><i class="fa-solid fa-bath"></i><br />2 Bath  </div>
                    </div>

                </div>
            </div>


        </div>

              

       








        </>
    

    )
};

export default Home;
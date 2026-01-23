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

import c1 from './img/call-to-action.jpg';

import te1 from './img/team-1.jpg';
import te2 from './img/team-2.jpg';
import te3 from './img/team-3.jpg';
import te4 from './img/team-4.jpg';

import i1 from './img/testimonial-1.jpg';
import i2 from './img/testimonial-2.jpg';
import i3 from './img/testimonial-3.jpg';

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
                <img src={abt} style={{width:'100%', height:'600px'}} />

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
                        <img src={pr2} className="img-fluid" alt="House" />
                            <span className="badge-sell">For Rent</span>
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
                        <img src={pr3} className="img-fluid" alt="House" />
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

             <div className="card" id="#p-card" style={{}}>
                    <div className="property-img">
                        <img src={pr4} className="img-fluid" alt="House" />
                            <span className="badge-sell">For Rent</span>
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
                        <img src={pr5} className="img-fluid" alt="House" />
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
                        <img src={pr6} className="img-fluid" alt="House" />
                            <span className="badge-sell">For Rent</span>
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
         <center><button className='aa1'>Browse More Property</button></center>

{/* contact */}

        <div className='perfect con-1'>
            <div className='perfect-img1'>
                <img src={c1} style={{width:'90%', height:'400px'}} />

            </div>
            <div className='perfect-text t1'>
                <h1>Contact With Our <br/> Certified Agent</h1>
                <p>Eirmod sed ipsum dolor sit rebum magna erat. <br/>Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>

                <button id='cq'><i class="fa-solid fa-headset" style={{color:'black'}}></i>Make A Call</button>
                <button ><i class="fa-solid fa-calendar-days"></i>Get Appointment</button>

            </div>
        </div>

{/* Property Agents */}
        
            <div class="text-center te ">
                <h1 class="fw-bold">Property Agents</h1>
                <p class="text-muted col-lg-7 mx-auto">
                Eirmod sed ipsum dolor sit reburn labore magna erat. Tempor ut dolore lorem
                kasd vero ipsum sit eirmod sit. Ipsum diam justo sed reburn vero dolor duo.
                </p>
            </div>

        <div className='card-con'>

            <div class="card cd">
                    <img src={te1}/>
                        <div class="card-body">
                                  <div class="icon d-flex justify-content-center gap-2 mb-3">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                  </div>

                        <h1 className='text-center' >Full Name</h1>
                        <p class="card-text text-center">Designation</p>
                        </div>
            </div>

            <div class="card cd">
                    <img src={te2}/>
                        <div class="card-body">
                                  <div class="icon d-flex justify-content-center gap-2 mb-3">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                  </div>

                        <h1 className='text-center' >Full Name</h1>
                        <p class="card-text text-center">Designation</p>
                        </div>
            </div>

             <div class="card cd">
                    <img src={te3}/>
                        <div class="card-body">
                                  <div class="icon d-flex justify-content-center gap-2 mb-3">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                  </div>

                        <h1 className='text-center'>Full Name</h1>
                        <p class="card-text text-center">Designation</p>
                        </div>
            </div>

             <div class="card cd">
                    <img src={te4}/>
                        <div class="card-body">
                                  <div class="icon d-flex justify-content-center gap-2 mb-3">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                  </div>

                        <h1 className='text-center'>Full Name</h1>
                        <p class="card-text text-center">Designation</p>
                        </div>
            </div>
        </div> 

       {/*testimonial  */}

         <div class="text-center te tm">
                <h1 class="fw-bold">Our Clients Say!</h1>
                <p class="text-muted col-lg-7 mx-auto">
                Eirmod sed ipsum dolor sit reburn labore magna erat. Tempor ut dolore lorem
                kasd vero ipsum sit eirmod sit. Ipsum diam justo sed reburn vero dolor duo.
                </p>
            </div>

            <div className='testi container'>
<div className='test-2'>
                <p class="text-muted ">
                Eirmod sed ipsum dolor sit reburn labore magna erat. Tempor ut dolore lorem
                kasd vero ipsum sit eirmod sit. Ipsum diam justo sed reburn vero dolor duo.
                </p>

                <div className='test-body'>
                    <div>
                        <img src={i1} className='rounded'/>
                    </div>
                    <div className='test-te'>
                        <h6 >Client Name  </h6>
                        <p >Profession  </p>
                    </div>
                    
                </div>
</div>                
<div className='test-1'>
                <p class="text-muted ">
                Eirmod sed ipsum dolor sit reburn labore magna erat. Tempor ut dolore lorem
                kasd vero ipsum sit eirmod sit. Ipsum diam justo sed reburn vero dolor duo.
                </p>

                <div className='test-body'>
                    <div>
                        <img src={i2} className='rounded'/>
                    </div>
                    <div className='test-te'>
                        <h6 >Client Name  </h6>
                        <p >Profession  </p>
                    </div>
                    
                </div>
</div>
                <div className='test-2'>
                <p class="text-muted ">
                Eirmod sed ipsum dolor sit reburn labore magna erat. Tempor ut dolore lorem
                kasd vero ipsum sit eirmod sit. Ipsum diam justo sed reburn vero dolor duo.
                </p>

                <div className='test-body'>
                    <div>
                        <img src={i3} className='rounded'/>
                    </div>
                    <div className='test-te'>
                        <h6 >Client Name  </h6>
                        <p >Profession  </p>
                    </div>
                    
                </div>
             </div>   

            <div className='test-1'>

                <p class="text-muted ">
                Eirmod sed ipsum dolor sit reburn labore magna erat. Tempor ut dolore lorem
                kasd vero ipsum sit eirmod sit. Ipsum diam justo sed reburn vero dolor duo.
                </p>

                <div className='test-body'>
                    <div>
                        <img src={i1} className='rounded'/>
                    </div>
                    <div className='test-te'>
                        <h6 >Client Name  </h6>
                        <p >Profession  </p>
                    </div>    
                </div>
            </div>    
                
            </div>


 {/* Footer */}
<footer class="footer pt-5">
  <div class="container">
    <div class="row g-4">

       {/* Get In Touch */}
      <div class="col-lg-3 col-md-6">
        <h5 class="text-white mb-3">Get In Touch</h5>
        <p><i class="bi bi-geo-alt-fill me-2"></i>123 Street, New York, USA</p>
        <p><i class="bi bi-telephone-fill me-2"></i>+012 345 67890</p>
        <p><i class="bi bi-envelope-fill me-2"></i>info@example.com</p>

        <div class="social mt-3">
          <a href="#"> <i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

       {/* Quick Links */}
      <div class="col-lg-3 col-md-6">
        <h5 class="text-white mb-3">Quick Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><i class="fa-solid fa-angle-right"></i><a href="#">About Us</a></li>
          <li class="mb-2"><i class="fa-solid fa-angle-right"></i><a href="#">Contact Us</a></li>
          <li class="mb-2"><i class="fa-solid fa-angle-right"></i><a href="#">Our Services</a></li>
          <li class="mb-2"><i class="fa-solid fa-angle-right"></i><a href="#">Privacy Policy</a></li>
          <li><i class="fa-solid fa-angle-right"></i><a href="#">Terms & Condition</a></li>
        </ul>
      </div>

       {/* Photo Gallery */}
      <div class="col-lg-3 col-md-6">
        <h5 class="text-white mb-3">Photo Gallery</h5>
        <div class="row g-2 gallery">
          <div class="col-4"><img src={pr1} alt=""/></div>
          <div class="col-4"><img src={pr2} alt=""/></div>
          <div class="col-4"><img src={pr3} alt=""/></div>
          <div class="col-4"><img src={pr4} alt=""/></div>
          <div class="col-4"><img src={pr5} alt=""/></div>
          <div class="col-4"><img src={pr6} alt=""/></div>
        </div>
      </div>

       {/* Newsletter */}
      <div class="col-lg-3 col-md-6">
        <h5 class="text-white mb-3">Newsletter</h5>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div class="input-group">
          <input type="email" class="form-control" placeholder="Your email"/>
          <button class="btn btn-success">SignUp</button>
        </div>
      </div>

    </div>

      {/* Bottom */}
    <div class="footer-bottom mt-5 py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
      <p class="mb-2 mb-md-0">
        © <strong>Makaan</strong>, All Right Reserved. Designed By
        <a href="#" class="text-success">Akash Mass</a>
      </p>
      <div>
        <a href="#" class="me-3">Home</a>
        <a href="#" class="me-3">Cookies</a>
        <a href="#" class="me-3">Help</a>
        <a href="#">FAQs</a>
      </div>
    </div>

  </div>
</footer>



 





              

       








        </>
    

    )
};

export default Home;
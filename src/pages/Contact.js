import h1 from './img/carousel-1.jpg';

import c1 from './img/call-to-action.jpg';

import te1 from './img/team-1.jpg';
import te2 from './img/team-2.jpg';
import te3 from './img/team-3.jpg';
import te4 from './img/team-4.jpg';




import pr1 from './img/property-1.jpg';
import pr2 from './img/property-2.jpg';
import pr3 from './img/property-3.jpg';
import pr4 from './img/property-4.jpg';
import pr5 from './img/property-5.jpg';
import pr6 from './img/property-6.jpg';




const Contact=()=>{
    return(
        <>
        
          {/* About section  */}
        <div className='Home'>
            <div className='home-text'>
                <h1>Contact Us</h1>
                <p>HOME/PAGES/ <b>CONTACT</b></p>
            </div>

            <div>
                 <img src={h1} style={{width:'100%', height:'600px'}}/>
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
    
}

export default Contact;
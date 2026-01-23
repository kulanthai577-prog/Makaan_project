import h1 from './img/carousel-1.jpg';

import abt from './img/about.jpg';

import pr1 from './img/property-1.jpg';
import pr2 from './img/property-2.jpg';
import pr3 from './img/property-3.jpg';
import pr4 from './img/property-4.jpg';
import pr5 from './img/property-5.jpg';
import pr6 from './img/property-6.jpg';



const About=()=>{
    return(
      
    <>

        {/* About section  */}
        <div className='Home'>
            <div className='home-text'>
                <h1>About Us</h1>
                <p>HOME/PAGES/ <b>ABOUT</b></p>
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

export default About;
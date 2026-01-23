import { Outlet,Link } from "react-router-dom";
import { Navbar,Nav,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import l1 from './img/icon-deal.png';

const Layout=()=>{
    return(
<>

<nav className="navbar navbar-expand-lg  container">
  <div className="container ms-auto">

    <Link className="navbar-brand" id="n1"> <img src={l1} style={{height:'30px'}} /> Makaan</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active" to="/" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown" >
          <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" to="/property" data-bs-toggle="dropdown" aria-expanded="false">
            Property
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/property" >Property List</Link></li>
            <li><Link className="dropdown-item" to="/property">Property Type</Link></li>
            <li><Link className="dropdown-item" to="/property">Property Agent</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pages">Pages</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-success">Add Property</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* <div className="arrow"><i class="fa-solid fa-arrow-up"></i></div> */}
<Outlet/>
</>
)
}

export default Layout;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './aboutUs'; // Ensure correct case in import
import ContactUs from './contactus'; // Ensure correct case in import
import WorkUs from './workus'; // Ensure correct case in import
import InfluencerFinder from './InfluencerFinder'; // Ensure correct case in import

import myntraLogo from './myntra.svg';
import clothingImage from './images/clothing.jpg';
import cosmeticImage from './images/cosmetics.jpg';
import accesoriesImage from './images/accesories.jpg';
import accesoriesspanImage from './images/accessories_span.jpg';
import cosmeticsspanImage from './images/cosmetics_span.jpg';
import clothingspanImage from './images/clothing_span.jpg';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
        <Link className="navbar-brand" to="/">
          <img src={myntraLogo} width="30" height="30" alt="Myntra Logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active mx-2 text-white" to="/">Home</Link>
            <Link className="nav-item nav-link active mx-2 text-white" to="/AboutUs">About Us</Link>
            <Link className="nav-item nav-link active mx-2 text-white" to="/ContactUs">Contact Us</Link>
          </div>
          <div className="ml-auto">
            <Link className="btn btn-light my-2 my-sm-0 mx-2" to="/WorkUs">Work with Us</Link>
            <Link className="btn btn-light my-2 my-sm-0 mx-2" to="/InfluencerFinder">Influencer Finder</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/WorkUs" element={<WorkUs />} />
        <Route path="/InfluencerFinder" element={<InfluencerFinder />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

function Home() {
  return (
    <main>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cosmeticImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h5>Discover the Best in Beauty</h5>
              <p>Enhance your natural beauty with our top-quality cosmetics.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={clothingImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h5>Fashion that Defines You</h5>
              <p>Explore our latest collection and make a style statement.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={accesoriesImage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h5>Accessorize to Impress</h5>
              <p>Complete your look with our trendy and chic accessories.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className='bg-color'>
        <div className="seperation"></div>
        <section className="first">
          <div>
            <span>Accessories</span>
            <span>Elevate your style with our trendsetting accessories, perfect for every occasion.</span>
          </div>
          <div className="secimg">
            <img src={accesoriesspanImage} alt="" />
          </div>
        </section>
        <div className="seperation"></div>
        <section className="first">
          <div className="secimg">
            <img src={cosmeticsspanImage} alt="" />
          </div>
          <div>
            <span>Cosmetics</span>
            <span>Discover flawless beauty with our premium cosmetics, enhancing your natural charm effortlessly.</span>
          </div>
        </section>
        <div className="seperation"></div>
        <section className="first third">
          <div>
            <span>Clothing</span>
            <span>Explore fashion-forward clothing that blends comfort with sophistication, ensuring you stand out wherever you go.</span>
          </div>
          <div className="secimg">
            <img src={clothingspanImage} alt="" />
          </div>
        </section>
        <div className="seperation"></div>
      </div>
      <footer className="text-center text-lg-start" style={{ backgroundColor: '#2e2c2c', width: '100%' }}>
        <div className="d-flex justify-content-center py-5">
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <img src={facebook} width="30" height="30" alt="Facebook Logo" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <img src={linkedin} width="30" height="30" alt="LinkedIn Logo" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <img src={instagram} width="30" height="30" alt="Instagram Logo" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <img src={twitter} width="30" height="30" alt="Twitter Logo" />
          </button>
        </div>
        <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://myntra.com/">Myntra.com</a>
        </div>
      </footer>
    </main>
  );
}

export default App;

import React from 'react';
import './App.css';
import myntraLogo from './myntra.svg';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';

const AboutUs = () => {
    return (
        <div className=" container-fluid bg-color">
            <section className="about">
                <h1>About Us</h1>
                <p className="intro-text">
                    Welcome to Myntra Influencer, the ultimate destination where influencers and brands come together to create magic!
                </p>
                <div className="about-content">
                    <div className="about-img">
                        <img src={myntraLogo} alt="Myntra Logo" />
                    </div>
                    <div className="about-text">
                        <h2>Who We Are</h2>
                        <p>
                            At Myntra Influencer, we believe in the power of collaboration. Our platform is designed to bring influencers and companies together to create impactful marketing campaigns. Whether you're a brand looking to expand your reach or an influencer eager to showcase innovative products, we provide the tools and connections to make it happen.
                        </p>
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to revolutionize the way products are marketed by harnessing the power of influencer collaborations. We strive to create a seamless and rewarding experience for both brands and influencers, ensuring that every partnership is beneficial and authentic.
                        </p>
                        <h2>What We Offer</h2>
                        <p>
                            <strong>For Influencers:</strong> Gain access to a wide range of brands looking for creative minds to promote their products. From fashion and accessories to cosmetics and beyond, discover exciting opportunities to showcase products you love and believe in.
                        </p>
                        <p>
                            <strong>For Brands:</strong> Find the perfect influencers to represent your brand. Our platform connects you with influencers who align with your values and target audience, ensuring that your products reach the right people in the most engaging way.
                        </p>
                        <h2>Why Choose Us?</h2>
                        <ul>
                            <li><strong>Tailored Matches:</strong> Our advanced algorithms ensure that brands and influencers are matched based on compatibility, audience demographics, and campaign goals.</li>
                            <li><strong>Seamless Collaboration:</strong> Enjoy a streamlined process for collaboration, with tools and resources to manage campaigns from start to finish.</li>
                            <li><strong>Authentic Partnerships:</strong> We prioritize genuine connections and authentic content, helping brands and influencers build trust with their audiences.</li>
                        </ul>
                        <h2>Join Our Community</h2>
                        <p>
                            Ready to take your marketing to the next level? Join [Your Platform Name] today and become part of a vibrant community of innovators, creators, and trendsetters. Together, we can create campaigns that not only reach but resonate.
                        </p>
                    </div>
                </div>
            </section>
            <br />
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
          © 2024 Copyright:
          <a className="text-white" href="https://myntra.com/">Myntra.com</a>
        </div>
      </footer>
        </div>
        
    );
}

export default AboutUs;

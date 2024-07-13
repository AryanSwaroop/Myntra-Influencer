import React from 'react';
import './App.css';
import myntraLogo from './myntra.svg';

const InfluencerFinder = () => {
    return (
        <div className="App">
            <div className="container-fluid mt-2 bg-color">
                <h1 className="text-center">Find the best Influencer for your Product</h1>
                <p className="text-center">Personalize Your Influencer Collaboration</p>
                <form >
                    {/* onSubmit={handleSubmit} */}
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name <span className="required">*</span></label>
                            <input type="text" className="form-control" id="name"  placeholder="Your Name" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input type="email" className="form-control" id="email"  placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="phoneNumber">Phone Number <span className="required">*</span></label>
                            <input type="tel" className="form-control" id="phoneNumber"  placeholder="Your Phone Number" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="productCategory">Product Category Preference <span className="required">*</span></label>
                            <select id="productCategory" className="form-control"  required>
                                <option value="">Choose...</option>
                                <option>Clothing</option>
                                <option>Accessories</option>
                                <option>Cosmetics</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InfluencerFinder;


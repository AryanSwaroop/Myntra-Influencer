import React, { useState } from 'react';
import './App.css';
import './influencerfinder.css';
import accesoriesspanImage from './images/accessories_span.jpg';
import InfluencerCard from './InfluencerCard';

const InfluencerFinder = () => {
    const [influencers, setInfluencers] = useState([]);
    const [buttonText, setButtonText] = useState('Search');

    const dummyInfluencers = [
        {
            id: 1,
            name: "Neha",
            productCategory: "Clothing",
            followers: 100000,
            likes: 5000,
            comments: 200,
            shares: 100,
            imageUrl: accesoriesspanImage
        },
        {
            id: 2,
            name: "Sneha",
            productCategory: "Accessories",
            followers: 50000,
            likes: 2500,
            comments: 100,
            shares: 50,
            imageUrl: accesoriesspanImage
        },{
            id: 3,
            name: "Neha",
            productCategory: "Clothing",
            followers: 100000,
            likes: 5000,
            comments: 200,
            shares: 100,
            imageUrl: accesoriesspanImage
        },
        {
            id: 4,
            name: "Sneha",
            productCategory: "Accessories",
            followers: 50000,
            likes: 2500,
            comments: 100,
            shares: 50,
            imageUrl: accesoriesspanImage
        },{
            id: 5,
            name: "Neha",
            productCategory: "Clothing",
            followers: 100000,
            likes: 5000,
            comments: 200,
            shares: 100,
            imageUrl: accesoriesspanImage
        },
        {
            id: 6,
            name: "Sneha",
            productCategory: "Accessories",
            followers: 50000,
            likes: 2500,
            comments: 100,
            shares: 50,
            imageUrl: accesoriesspanImage
        },{
            id: 7,
            name: "Neha",
            productCategory: "Clothing",
            followers: 100000,
            likes: 5000,
            comments: 200,
            shares: 100,
            imageUrl: accesoriesspanImage
        },
        {
            id: 8,
            name: "Sneha",
            productCategory: "Accessories",
            followers: 50000,
            likes: 2500,
            comments: 100,
            shares: 50,
            imageUrl: accesoriesspanImage
        }
        // Add more influencers as needed
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (buttonText === 'Search') {
            setInfluencers(dummyInfluencers);
            setButtonText('Update');
        } else {
            setInfluencers([]);
            setButtonText('Search');
        }
    };

    return (
        <div className="App">
            <div className="bg-color">
                <div className="container-fluid mt-2">
                    <h1 className="text-center text-black">Find the Best Influencer for Your Product</h1>
                    <p className="text-center text-black">Personalize Your Influencer Collaboration</p>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="productCategory" className="text-black">Product Category Preference <span className="required">*</span></label>
                                    <select id="productCategory" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>Clothing</option>
                                        <option>Accessories</option>
                                        <option>Cosmetics</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="targetAudienceRange" className="text-black">Target Audience Range</label>
                                    <select id="targetAudienceRange" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>0 to 10,000</option>
                                        <option>10,000 to 50,000</option>
                                        <option>50,000 to 100,000</option>
                                        <option>100,000 to 500,000</option>
                                        <option>500,000 to 1,000,000</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="targetAudienceGender" className="text-black">Target Audience Gender</label>
                                    <select id="targetAudienceGender" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="budget" className="text-black">Budget <span className="required">*</span></label>
                                    <input type="text" className="form-control" id="budget" placeholder="Budget" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="state" className="text-black">State <span className="required">*</span></label>
                                    <input type="text" className="form-control" id="state" placeholder="State" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="city" className="text-black">City <span className="required">*</span></label>
                                    <input type="text" className="form-control" id="city" placeholder="City" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="campaignDuration" className="text-black">Campaign Duration <span className="required">*</span></label>
                                    <select id="campaignDuration" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>1 Week</option>
                                        <option>1 Month</option>
                                        <option>3 Months</option>
                                        <option>6 Months</option>
                                        <option>1 Year</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-pink">{buttonText}</button>
                        </form>
                    </div>
                    <div className="card-container">
                        {influencers.length > 0 ? (
                            influencers.map((influencer) => (
                                <InfluencerCard key={influencer.id} influencer={influencer} />
                            ))
                        ) : (
                            <p className="text-black">No influencers found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfluencerFinder;

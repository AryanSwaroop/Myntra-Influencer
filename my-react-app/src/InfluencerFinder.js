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


                                <div className="form-group col-md-6">
                                    <label htmlFor="targetAudienceRange" className="text-black">Target Audience Range</label>
                                    <select id="targetAudienceRange" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>5 to 15</option>
                                        <option>15 to 25</option>
                                        <option>25 to 45</option>
                                        <option>45 to 55</option>
                                        <option>55 to 75</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div className="form-group col-md-6">
                                    <label htmlFor="targetAudienceGender" className="text-black">Target Audience Gender</label>
                                    <select id="targetAudienceGender" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Both</option>
                                        <option>Others</option>
                                    </select>
                                </div>



                                <div className="form-group col-md-6">
                                    <label htmlFor="budget" className="text-black">Budget <span className="required">*</span></label>
                                    <input type="text" className="form-control" id="budget" placeholder="Budget" required />
                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div className="form-group col-md-6">
                                    <label htmlFor="state" className="text-black">State <span className="required">*</span></label>
                                    <input type="text" className="form-control" id="state" placeholder="State" required />
                                </div>



                                <div className="form-group col-md-6">
                                    <label htmlFor="campaignDuration" className="text-black">Campaign Duration <span className="required">*</span></label>
                                    <select id="campaignDuration" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>One-time-post</option>
                                        <option>Month-long</option>
                                        <option>Year-long</option>
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

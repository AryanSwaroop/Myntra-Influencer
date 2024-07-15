import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const WorkUs = () => {
    // const [isUpdating, setIsUpdating] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        productCategory: '',
        platform: '',
        username: '',
        followers: '',
        averageLikes: '',
        averageComments: '',
        averageShares: '',
        audienceSatisfaction: '',
        audienceAge: '',
        audienceType: '',
        audienceGender: '',
        pastCampaignSuccess: '',
        expectedBudget: '',
        engagementRate: '',
        followersGrowthRate: '',
        achievements: '',
        bio: '',
        photo: null,
        state: '',
        city: '',
        campaignDuration: ''
    });

    // useEffect(() => {
    //     // Mock fetching existing data
    //     const existingData = localStorage.getItem('influencerData');
    //     if (existingData) {
    //         setFormData(JSON.parse(existingData));
    //         setIsUpdating(true);
    //     }
    // }, []);

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, photo: e.target.files[0] });
        } else {
            const { id, value } = e.target;
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://freelancebackend-oxma.onrender.com/dataUpload", JSON.stringify(formData) ,{
            headers: {
                "Access-Control-Allow-Origin": "https://freelancebackend-oxma.onrender.com",
                "Access-Control-Allow-Credentials": "true",
                "Content-Type" : "application/json"
              }
        })
        .then(response => {
            console.log(response);
        });
        // localStorage.setItem('influencerData', JSON.stringify(formData));
        // alert(isUpdating ? 'Details updated successfully!' : 'Form submitted successfully!');
    };

    return (
        <div className="container-fluid mt-2 bg-color">
            <h1 className="text-center">Work With Us</h1>
            <p className="text-center">Fill out the form below to collaborate with us.</p>
            <form>
                onSubmit={handleSubmit}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name <span className="required">*</span></label>
                        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="phoneNumber">Phone Number <span className="required">*</span></label>
                        <input type="tel" className="form-control" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Your Phone Number" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="productCategory">Product Category Preference <span className="required">*</span></label>
                        <select id="productCategory" className="form-control" value={formData.productCategory} onChange={handleChange} required>
                            <option value="">Choose...</option>
                            <option>Clothing</option>
                            <option>Accessories</option>
                            <option>Cosmetics</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="platform">Primary Platform <span className="required">*</span></label>
                        <select id="platform" className="form-control" value={formData.platform} onChange={handleChange} required>
                            <option value="">Choose...</option>
                            <option>Instagram</option>
                            <option>YouTube</option>
                            <option>Facebook</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="username">Username <span className="required">*</span></label>
                        <input type="text" className="form-control" id="username" value={formData.username} onChange={handleChange} placeholder="Your Username" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="followers">Number of Followers <span className="required">*</span></label>
                        <input type="number" className="form-control" id="followers" value={formData.followers} onChange={handleChange} placeholder="Number of Followers" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="averageLikes">Average Likes per Post/Video <span className="required">*</span></label>
                        <input type="number" className="form-control" id="averageLikes" value={formData.averageLikes} onChange={handleChange} placeholder="Average Likes" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="averageComments">Average Comments per Post/Video <span className="required">*</span></label>
                        <input type="number" className="form-control" id="averageComments" value={formData.averageComments} onChange={handleChange} placeholder="Average Comments" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="averageShares">Average Shares per Post/Video <span className="required">*</span></label>
                        <input type="number" className="form-control" id="averageShares" value={formData.averageShares} onChange={handleChange} placeholder="Average Shares" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="audienceSatisfaction">Audience Satisfaction (0-10) <span className="required">*</span></label>
                        <input type="number" className="form-control" id="audienceSatisfaction" value={formData.audienceSatisfaction} onChange={handleChange} min="0" max="10" placeholder="Rate from 0 to 10" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="audienceAge">Audience Age Group <span className="required">*</span></label>
                        <select id="audienceAge" className="form-control" value={formData.audienceAge} onChange={handleChange} required>
                            <option value="">Choose...</option>
                            <option>5 to 15</option>
                            <option>15 to 25</option>
                            <option>25 to 45</option>
                            <option>45 to 55</option>
                            <option>55 to 75</option>
                            <option>75 to 100</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="audienceType">Targeted Audience Type <span className="required">*</span></label>
                        <select id="audienceType" className="form-control" value={formData.audienceType} onChange={handleChange} required>
                            <option value="">Choose...</option>
                            <option>Children</option>
                            <option>Teenager</option>
                            <option>Adults</option>
                            <option>Old Age</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="audienceGender">Targeted Audience Gender <span className="required">*</span></label>
                        <select id="audienceGender" className="form-control" value={formData.audienceGender} onChange={handleChange} required>
                            <option value="">Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Both</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="pastCampaignSuccess">Past Campaign Success Rate (0-10) <span className="required">*</span></label>
                        <input type="number" className="form-control" id="pastCampaignSuccess" value={formData.pastCampaignSuccess} onChange={handleChange} min="0" max="10" placeholder="Rate from 0 to 10" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="expectedBudget">Expected Budget per Post/Video <span className="required">*</span></label>
                        <input type="number" className="form-control" id="expectedBudget" value={formData.expectedBudget} onChange={handleChange} placeholder="Expected Budget" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="engagementRate">Engagement Rate (0-10) <span className="required">*</span></label>
                        <input type="number" className="form-control" id="engagementRate" value={formData.engagementRate} onChange={handleChange} min="0" max="10" placeholder="Rate from 0 to 10" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="followersGrowthRate">Followers Growth Rate (0-10) <span className="required">*</span></label>
                        <input type="number" className="form-control" id="followersGrowthRate" value={formData.followersGrowthRate} onChange={handleChange} min="0" max="10" placeholder="Rate from 0 to 10" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="state">State <span className="required">*</span></label>
                        <input type="text" className="form-control" id="state" value={formData.state} onChange={handleChange} placeholder="Your State" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City<span className="required">*</span></label>
                        <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} placeholder="Your City" required />
                    </div>
                 
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="campaignDuration">Campaign Duration <span className="required">*</span></label>
                        <select id="campaignDuration" className="form-control" value={formData.campaignDuration} onChange={handleChange} required>
                            <option value="">Choose...</option>
                            <option value="One-time-post">One-time-post</option>
                            <option value="Month-long">Month-long</option>
                            <option value="Year-long">Year-long</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="achievements">Achievements </label>
                        <textarea className="form-control" id="achievements" rows="3" value={formData.achievements} onChange={handleChange} placeholder="List your achievements" required></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="bio">Short Bio </label>
                        <textarea className="form-control" id="bio" rows="3" value={formData.bio} onChange={handleChange} placeholder="Tell us a bit about yourself" required></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="photo">Upload Photo <span className="required">*</span></label>
                        <input type="file" className="form-control-file" id="photo" onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <button type="submit" onClick={handleSubmit} className="btn btn-pink">Submit</button>
                    {/* {isUpdating ? 'Update Details' : 'Submit'} */}
                </div>
                <div className="form-row mt-3">
                    <p className="text-center w-100">* Please update this regularly for more opportunities.</p>
                </div>
            </form>
        </div>
    );
}

export default WorkUs;

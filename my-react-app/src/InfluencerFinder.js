import React, { useState,useEffect } from 'react';
import axios from'axios'
import './App.css';
import './influencerfinder.css';
import accesoriesspanImage from './images/accessories_span.jpg';
import InfluencerCard from './InfluencerCard';

const InfluencerFinder = () => {
    const data={productCategory:"",targetAudienceGender:"",targetAudienceRange:"",budget:"",campaignDuration:""};
    const[inputData,setInputData]=useState(data);
    const handleData=(e)=>{
        const { id, value } = e.target;
        setInputData({...inputData,[id]:value});

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("", JSON.stringify(inputData) ,{
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": "true",
                "Content-Type" : "application/json"
              }
        })
        .then(response => {
            console.log(response);
        });
    }
    

    const [influencers, setInfluencers] = useState([]);
    useEffect(()=>{
        axios.get(" ")
        .then((response)=>{
            console.log(response);
            setInfluencers(response.data)

        })

    },[])

  

    // const dummyInfluencers = [
    //     {
    //         id: 1,
    //         name: "Neha",
    //         productCategory: "Clothing",
    //         followers: 100000,
    //         likes: 5000,
    //         comments: 200,
    //         shares: 100,
    //         imageUrl: accesoriesspanImage
    //     }
   
   
    // ];

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (buttonText === 'Search') {
    //         setInfluencers(dummyInfluencers);
    //         setButtonText('Update');
    //     } else {
    //         setInfluencers([]);
    //         setButtonText('Search');
    //     }
    // };

    return (
        <div className="App">
            <div className="bg-color">
                <div className="container-fluid mt-2">
                    <h1 className="text-center text-black">Find the Best Influencer for Your Product</h1>
                    <p className="text-center text-black">Personalize Your Influencer Collaboration</p>
                    <div className="form-container">
                        <form >
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="productCategory" className="text-black">Product Category Preference <span className="required">*</span></label>
                                    <select id="productCategory" value={data.productCategory} onChange={handleData} className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>Clothing</option>
                                        <option>Accessories</option>
                                        <option>Cosmetics</option>
                                    </select>
                                </div>


                                <div className="form-group col-md-6">
                                    <label htmlFor="targetAudienceRange" className="text-black">Target Audience Range</label>
                                    <select id="targetAudienceRange"value={data.targetAudienceRange} onChange={handleData} className="form-control" required>
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
                                    <select id="targetAudienceGender" value={data.targetAudienceGender} onChange={handleData} className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Both</option>
                                        <option>Others</option>
                                    </select>
                                </div>



                                <div className="form-group col-md-6">
                                    <label htmlFor="budget" className="text-black">Budget <span className="required">*</span></label>
                                    <input type="text"value={data.budget} onChange={handleData} className="form-control" id="budget" placeholder="Budget" required />
                                </div>
                            </div>
                            <div className="form-row">
                                
                                <div className="form-group col-md-6">
                                    <label htmlFor="state" className="text-black">State <span className="required">*</span></label>
                                    <input type="text" value={data.state} onChange={handleData} className="form-control" id="state" placeholder="State" required />
                                </div>



                                <div className="form-group col-md-6">
                                    <label htmlFor="campaignDuration" className="text-black">Campaign Duration <span className="required">*</span></label>
                                    <select id="campaignDuration" value={data.campaignDuration} onChange={handleData} className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>One-time-post</option>
                                        <option>Month-long</option>
                                        <option>Year-long</option>
                                    </select>
                                </div>
                            </div>
                           
                            <button type="submit" onClick={handleSubmit} className="btn btn-pink">Submit</button>
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

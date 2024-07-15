import React from 'react';
import TagImage from './images/price-tag.png';
import FollowersImage from './images/check.png';
import LikeImage from './images/heart.png';
import CommentsImage from './images/comment.png';
import ShareImage from './images/send.png';
import './App.css';
import './influencerfinder.css';

const InfluencerCard = ({ influencer }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="influencer-card">
                <div className="card-content">
                    <div className="card-img-container">
                        <img src={influencer.imageUrl} className="card-img" alt="influencer profile" />
                    </div>
                    <div className="card-details">
                        <h5 className="card-title">{influencer.name}</h5>
                        <div className="card-info">
                            <img src={TagImage} alt="Tag Icon" className="card-icon" />
                            <span className="card-text">Product: {influencer.productCategory}</span>
                        </div>
                        <div className="card-info">
                            <img src={FollowersImage} alt="Followers Icon" className="card-icon" />
                            <span className="card-text">Followers: {influencer.followers}</span>
                        </div>
                        <div className="card-info">
                            <img src={LikeImage} alt="Likes Icon" className="card-icon" />
                            <span className="card-text">Likes: {influencer.likes}</span>
                        </div>
                        <div className="card-info">
                            <img src={CommentsImage} alt="Comments Icon" className="card-icon" />
                            <span className="card-text">Comments: {influencer.comments}</span>
                        </div>
                        <div className="card-info">
                            <img src={ShareImage} alt="Share Icon" className="card-icon" />
                            <span className="card-text">Shares: {influencer.shares}</span>
                        </div>
                        <a href="#" className="btn btn-primary btn-sm">Connect</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfluencerCard;

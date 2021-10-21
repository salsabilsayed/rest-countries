import React from 'react';
import image from '../assets/images/notfoundimage.jpg';

const NotFoundPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center pt-5">
            <div>
            <img  src={image} alt="notfound image" classNam="w-100"/>
            </div>
        
        </div>
    )
}

export default NotFoundPage;

import React from 'react';

const SinglePart = ({ part }) => {
    const { name, img, description } = part;

    return (
        <div>
            <div>
                <img src={img} alt="part images" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SinglePart;
import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList ( { pictures, getPictures }) {

    return (
        <div className="gallery-container">
        {pictures.map(picture => (
        <GalleryItem
            picture={picture} 
            key={picture.id}
            getPictures={getPictures}
            />
        ))}
        </div>
    )
}

export default GalleryList;
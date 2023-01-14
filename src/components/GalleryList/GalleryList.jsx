import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList ( { pictures, getPictures }) {

    return (
        <>
        {pictures.map(picture => (
        <GalleryItem 
            picture={picture} 
            key={picture.id}
            getPictures={getPictures}
            />
        ))}
        </>
    )
}

export default GalleryList;
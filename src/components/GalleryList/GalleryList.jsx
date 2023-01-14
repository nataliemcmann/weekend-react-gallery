import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList ( { pictures }) {

    return (
        <>
        {pictures.map(picture => (
        <GalleryItem picture={picture} key={picture.id}/>
        ))}
        </>
    )
}

export default GalleryList;
import { useState } from 'react';

function GalleryItem ({picture}) {

    return (
        <div>
        <img src={picture.path} width="250" height="200"/> 
        </div>
    )
}

export default GalleryItem;
import { useState } from 'react';

function GalleryItem ({picture}) {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    if (click === false) {
        return (
            <div onClick={handleClick}>
            <img src={picture.path} width="250" height="200"/> 
            </div>
        )
    } else {
        return (
            <div onClick={handleClick}>
                <p>{picture.description}</p>
            </div>
        )
    }
}

export default GalleryItem;
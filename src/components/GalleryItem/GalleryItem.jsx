import { useState } from 'react';
import LikeButton from './LikeButton.jsx';

function GalleryItem ({ picture, getPictures }) {
    const [click, setClick] = useState(false);

    const handleItemClick = () => {
        setClick(!click);
    }

    if (click === false) {
        return (
            <div>
            <img 
            onClick={handleItemClick}
            src={picture.path} 
            width="250" height="200"
            />
            <p>{picture.likes} people like this</p> 
            <LikeButton picture={picture} getPictures={getPictures}/>
            </div>
        )
    } else {
        return (
            <div>
                <p onClick={handleItemClick}>
                    {picture.description}
                </p>
                <p>{picture.likes} people like this</p> 
                <LikeButton picture={picture} getPictures={getPictures}/>
            </div>
        )
    }
}

export default GalleryItem;
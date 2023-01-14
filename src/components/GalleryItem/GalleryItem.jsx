import { useState } from 'react';
import LikeButton from './LikeButton.jsx';

function GalleryItem ({ picture, getPictures }) {
    const [click, setClick] = useState(false);

    const handleItemClick = () => {
        setClick(!click);
    }

    if (click === false) {
        return (
            <div className="item-container">
            <img 
            onClick={handleItemClick}
            src={picture.path} 
            className="relative"
            />
            <p>{picture.likes} people like this</p> 
            <LikeButton picture={picture} getPictures={getPictures}/>
            </div>
        )
    } else {
        return (
            <div className="item-container">
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
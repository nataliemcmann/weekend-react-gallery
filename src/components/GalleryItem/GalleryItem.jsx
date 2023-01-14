import { useState } from 'react';
import LikeButton from './LikeButton.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function GalleryItem ({ picture, getPictures }) {
    const [click, setClick] = useState(false);

    const handleItemClick = () => {
        setClick(!click);
    }

    if (click === false) {
        return (
            <Card 
                sx={{ 
                p:0.5,
                bgcolor: '#f1f0f7',
                }}
                onClick={handleItemClick}
                >
                <CardContent>
                <img 
                src={picture.path} 
                className="relative"
                />
                <p>{picture.likes} people like this</p> 
                <LikeButton picture={picture} getPictures={getPictures}/>
                </CardContent>
            </Card>
        )
    } else {
        return (
            <Card
                onClick={handleItemClick}
                >
                <CardContent>
                <p>
                    {picture.description}
                </p>
                <p>{picture.likes} people like this</p> 
                <LikeButton picture={picture} getPictures={getPictures}/>
                </CardContent>
            </Card>
        )
    }
}

export default GalleryItem;
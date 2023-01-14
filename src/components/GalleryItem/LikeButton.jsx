import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

function LikeButton ({ picture, getPictures }) {
    const [likeCount, setLikeCount] = useState(picture.likes);

    //handle button
    const handleClick = (event) => {
        event.preventDefault();
        setLikeCount(likeCount + 1);
        putLikes({picture, getPictures});
    }

    //put route
    const putLikes = ({picture, getPictures}) => {
        console.log(picture.id);
        axios.put(`/gallery/like/${picture.id}`)
        .then((res) => {
            console.log('PUT request successful');
            getPictures();
        }).catch((err) => {
            console.log('Error in PUT request', err);
        })
    }

    return (
        <button onClick={handleClick}>Like</button>
    )
}

export default LikeButton;
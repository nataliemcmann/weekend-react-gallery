import axios from 'axios';
import { useState } from 'react';
// import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function LikeButton ({ picture, getPictures }) {
    const [likeCount, setLikeCount] = useState(picture.likes);
    const [clickStatus, setClickStatus] = useState(false);

    //handle button
    const handleClick = (event) => {
        event.preventDefault();
        setClickStatus(true);
        setLikeCount(likeCount + 1);
        putLikes({picture, getPictures});
    }

    //put route
    const putLikes = ({picture, getPictures}) => {
        console.log(picture.id);
        axios({
            method: 'PUT',
            url: `/gallery/like/${picture.id}`,
            data: {
                likes: likeCount}
        })
        .then((res) => {
            console.log('PUT request successful');
            getPictures();
        }).catch((err) => {
            console.log('Error in PUT request', err);
        })
    }

    if (clickStatus === false) {
        return (
            <FavoriteBorderOutlinedIcon 
            onClick={handleClick}
            fontSize="large"
            >Like</FavoriteBorderOutlinedIcon>
        )
    } else {
        return (
            <FavoriteIcon 
            onClick={handleClick}
            sx={{ color: '#efaac4'}}
            fontSize="large"
            >Like</FavoriteIcon>
        )
    }
}

export default LikeButton;
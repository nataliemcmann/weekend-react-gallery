import axios from 'axios';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton ({ picture, getPictures }) {
    //handle button
    const handleDelete = (event) => {
        event.preventDefault();
        deletePicture({picture, getPictures});
    }

    //delete route
    const deletePicture = ({picture, getPictures}) => {
        console.log(picture.id);
        axios.delete(`/gallery/delete/${picture.id}`)
        .then((res) => {
            console.log('DELETE successful');
            getPictures();
        })
        .catch((err) => {
            console.log('Error in DELETE request', err)
        })
    }

    return (
        <DeleteIcon 
        onClick={handleDelete}
        fontSize="large"
        />
    )
}

export default DeleteButton;
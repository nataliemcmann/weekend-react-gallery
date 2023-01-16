import { useState } from 'react';
import axios from 'axios';

function PictureForm ({ getPictures }) {
    const [newPath, setNewPath] = useState('');
    const [newDscrpt, setNewDscrpt] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newPath) {
            postPicture();
        } else {
            //I would like to swap out the basic alert for a sweetalert
            alert(`Don't forget to add a picture!`);
        }
    }

    const postPicture = () => {
        axios.post('/gallery', 
        { path: newPath, description: newDscrpt })
        .then((res) => {
            //clear inputs
            setNewPath('');
            setNewDscrpt('');
            //sync DOM
            getPictures();
        })
        .catch((err) => {
            alert('Error in adding picture');
            console.log('Post request failed', err);
        })
    }

    return (
        <>
        <h2>Add a Picture</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Picture URL:
            </label>
            <input
            type="url"
            placeholder="local file path or url"
            value= {newPath}
            onChange={(evt) => setNewPath(evt.target.value)}
            />
            <label>
                Picture Description:
            </label>
            <input 
            type="text"
            placeholder="describe your image"
            value={newDscrpt}
            onChange={(evt) => setNewDscrpt(evt.target.value)}
            />
            <button type="submit">Save</button>
        </form>
        </>
    )
}

export default PictureForm;
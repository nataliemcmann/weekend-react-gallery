import { useState } from 'react';
import axios from 'axios';

function PictureForm () {
    const [newPath, setNewPath] = useState('');
    const [newDscrpt, setNewDscrpt] = useState('');

    return (
        <>
        <h2>Add a Picture</h2>
        <form>
            <label>
                Picture URL:
            </label>
            <input
            type="url"
            value= {newPath}
            onChange={(evt) => setNewPath(evt.target.value)}
            />
        </form>
        </>
    )
}

export default PictureForm;
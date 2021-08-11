import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import ImageGrid from './ImageGrid';

const UploadForm = () => {

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ['image/png','image/jpeg'];

    const changeHandler = (e) => {
        const selected = e.target.files[0];
        if(selected && types.includes(selected.type))
        {
            setError('');
            setFile(selected);
        }
        else{
            setFile(null);
            setError('Please attach image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error"> {error} </div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>
    )
}

export default UploadForm;
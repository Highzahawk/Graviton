import react from 'react';
import { useNavigate } from 'react-router-dom';

function FileManager(){
    const navigate = useNavigate();
    return(
        <div>
            <h>
                File Manager Page
                <button>download content</button>
            </h>

            <button>Filter</button>
            <button>Unit</button>

            {/* <button onClick={() => { navigate("/"); }}>
                Home
            </button> */}
        </div>
    );
}

export default FileManager;
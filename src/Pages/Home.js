import react from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    return(
        <div>
            <h>
                Homeies
            </h>

            <button>
                Add new class
            </button>

            <button>
                Search
            </button>

        </div>
    );
}

export default Home;
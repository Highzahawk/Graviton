import react from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard(){
    const navigate = useNavigate();

    return(
        <div>
            <h>
                Student Dashboard page
            </h>

            {/* <button onClick={() => { navigate("/"); }}>
                Home
            </button> */}
        </div>
    );
}

export default Dashboard;
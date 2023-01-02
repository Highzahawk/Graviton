import react from 'react';
import { useNavigate } from 'react-router-dom';

function Practice(){
    const navigate = useNavigate();

    return(
        <div>
            <h>
                Practice Page
                <button>Select Class</button>
            </h>

            <button onClick={() => { navigate("/QuizHome"); }}>
                Quizzes
            </button>

            <button onClick={() => { navigate("/FlashcardHome"); }}>
                Flash card sets
            </button>
        </div>
    );
}

export default Practice;
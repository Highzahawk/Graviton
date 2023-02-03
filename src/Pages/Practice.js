import React from 'react';
import { useNavigate } from 'react-router-dom';
import {DownloadOutlined, FilterFilled, SearchOutlined, PlusOutlined, DownOutlined} from '@ant-design/icons'
import {Button, Layout, Space, Grid, Row, Col, Dropdown, Typography, Menu} from 'antd'
import styles from "./PracticeStyles.css";

function Practice(){
    const navigate = useNavigate();
    
    const quizzes = () => {
        navigate('/QuizHome');
      };

    const newQuiz = () => {
        navigate('/CreateQuiz');
      };


    const Flashcard = () => {
        navigate('/FlashcardHome');
      };

    const newFlashcard = () => {
        navigate('/CreateFlashcard');
      };


    const classNames = (
        <Menu>
            <Menu.Item key="0">
                AP Calculus AB
            </Menu.Item>
            <Menu.Item key="1">
                AP Language
            </Menu.Item>
        </Menu>
    );

    return(
        <Row gutter={[16, 40]}>
           <Col span = {12}>
                <Dropdown overlay={classNames} trigger={['hover']}>
                    <Button type="primary" className = "ClassFilter" shape = "round" size = "large" >
                        Class Filter <DownOutlined />
                    </Button>
                </Dropdown>
            </Col>

            <Col span = {12}>
                <Button type="primary" className = "Toolbar" shape = "round" size = "large" >
                        <SearchOutlined style={{ fontSize: '24px' }} />
    
                </Button>
            </Col>  

            <Col span = {12} className="PracticeQuizzes">
            <Button type = "default" className = "Quizzes" size = "large">
                Practice Quizzes
            </Button>

            <Col span={12} className="QuizzesOptions">
                <Button type = "default" size = "small" className = "QuizOptions" onClick={quizzes}>
                    View Quizzes
                </Button>
                <Button type = "default" size = "small" className = "QuizOptions" onClick={newQuiz}>
                    Create New Quiz
                </Button>
            </Col>
            </Col>


            <Col span = {12} className="PracticeQuizzes">
            <Button type = "default" className = "Quizzes" size = "large">
                Flashcards
            </Button>

            <Col span={12} className="QuizzesOptions">
                <Button type = "default" size = "small" className = "QuizOptions" onClick={Flashcard}>
                    View All Sets
                </Button>
                <Button type = "default" size = "small" className = "QuizOptions" onClick={newFlashcard}>
                    Create New Set
                </Button>
            </Col>
            </Col>
            

        </Row>
    );
}

export default Practice;

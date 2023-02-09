import React, { useState } from 'react';
import { Card, Typography } from 'antd';

const { Text } = Typography;

const Flashcard = ({ question, answer, type }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ width: 600, height: 400, margin: '20px auto', backgroundColor: 'gray'}}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {isFlipped ? (
          <Text strong>{answer}</Text>
        ) : (
          <>
            <Text strong>{question}</Text>
          </>
        )}
      </div>
    </Card>
  );
};

const FlashcardContainer = () => (
  <>
    <Flashcard question="What is the capital of France?" answer="Paris" type="text" />
  </>
);

export default FlashcardContainer;

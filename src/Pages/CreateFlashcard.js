import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const CreateFlashcard = ({ onAddFlashcard }) => {
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    type: 'text',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFlashcard(formData);
    setFormData({
      question: '',
      answer: '',
      type: 'text',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          placeholder="Question/Term"
          name="question"
          value={formData.question}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="Answer/Definition"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Radio.Group value={formData.type} onChange={handleChange} name="type">
          <Radio value="text">Text</Radio>
          <Radio value="image">Image</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Term
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateFlashcard;

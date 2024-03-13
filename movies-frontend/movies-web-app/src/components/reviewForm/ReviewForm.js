import {From, Button} from 'react-bootstrap';

import React from 'react'

const ReviewForm = ({handleSubmit, revText, labelText, defaultValue}) => {
  return (
    <Form>
      <Form.Gorup className="mb-3" controlId="exampleForm.ControlTextreal">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revText} as ="textarea" rows={3} defaultValue={defaultValue}></Form.Control>
      </Form.Gorup>
      <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm
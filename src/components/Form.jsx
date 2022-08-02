import { useRef } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';

const Form = (props) => {
  const titleRef = useRef();
  const messageRef = useRef();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const messageValue = messageRef.current.value;

    props.AddTodo(titleValue, messageValue);
  };

  return (
    <Wrapper>
      <form onSubmit={addTodoHandler}>
        <div>
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" ref={titleRef} />
        </div>
        <div>
          <label className="form-label">Content:</label>
          <textarea className="form-control" rows="5" style={{ resize: 'none' }} ref={messageRef}></textarea>
        </div>
        <Button styles="btn btn-success mt-3 btn-lg" type="submit">
          Add Todo
        </Button>
      </form>
    </Wrapper>
  );
};
export default Form;

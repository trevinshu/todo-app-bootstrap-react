import { useRef, useState } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';
import Error from './Error';

const Form = (props) => {
  const titleRef = useRef();
  const messageRef = useRef();

  const [error, setError] = useState();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const messageValue = messageRef.current.value;

    if (titleValue.trim().length === 0 || messageValue.trim().length === 0) {
      setError({
        message: 'Please enter a title & description',
      });
    } else {
      props.AddTodo(titleValue, messageValue);
    }
  };

  return (
    <Wrapper>
      {error && <Error>{error.message}</Error>}
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

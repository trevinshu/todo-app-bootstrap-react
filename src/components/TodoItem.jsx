import Wrapper from './Wrapper';

const TodoItem = (props) => {
  return (
    <Wrapper>
      {props.items.map((item) => (
        <div className="card mt-4" key={item.id}>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default TodoItem;

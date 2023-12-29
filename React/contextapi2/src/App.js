import Provider from "./Provider";
import Context from "./Context";
const App = () => {
  return (
    <>
      <h1>App is showing</h1>
      <Provider>
        <Child1 />
      </Provider>
    </>
  );
};

const Child1 = () => {
  return <Child2 />;
};

const Child2 = () => {
  return <Child3 />;
};

const Child3 = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          <h1>Family Details</h1>
          <p>
            {context.data.map((persons) => (
              <ShowValues data={persons} remove={context.rem} />
            ))}
          </p>
          <p>{context.accepted}</p>
          <h1>Family Details end</h1>
        </>
      )}
    </Context.Consumer>
  );
};

const ShowValues = ({ data, remove }) => {
  return (
    <>
      <h3>
        {data.name} {data.rollno}
      </h3>
      <button onClick={() => remove(data.id)}>Remove Me</button>
    </>
  );
};

export default App;

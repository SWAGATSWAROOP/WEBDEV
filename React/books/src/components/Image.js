const clickEvents = () => {
  alert("Swagat");
};

const Image = (props) => {
  // Object destructuring
  //After using the spread operator we dont need have to specify the object name passed
  const { title, author, image } = props;
  const children = props.children;
  return (
    <div className="Books">
      <h1 onClick={() => alert(`${title}`)}>{title}</h1>
      <h5>{author}</h5>
      <img src={image} alt="" />
      {/* Using Props */}
      <p>{props.title}</p>
      <h1>{props.award}</h1>
      {/* Passing the children */}
      {/* Child Can Be accesed only with Children Name */}
      <h1>{children}</h1>
      <button type="button" onClick={clickEvents}>
        ExampleButton
      </button>
    </div>
  );
};

export default Image;

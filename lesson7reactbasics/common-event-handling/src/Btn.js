// function Btn() {
//   const clickHandler = () => console.log("Clicked");

//   return <button onClick={clickHandler}>Click Me</button>;
// }

// export default Btn;

function Btn() {
  const clickHandler = () => console.log("Mouse Over");

  return <button onMouseOver={clickHandler}>Click Me</button>;
}

export default Btn;

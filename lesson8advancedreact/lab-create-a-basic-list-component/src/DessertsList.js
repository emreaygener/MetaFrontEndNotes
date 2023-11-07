// function DessertsList(props) {
//   const listItems = props.data.filter(
//     (dessert) => {
//       return dessert.calories < 500;
//     }
//   );
//   const sortedList = listItems.sort((a,b) => a.calories - b.calories);
//   const desserts = sortedList.map((dessert) => {
//     const item = `${dessert.name} - ${dessert.calories} cal`;
//     return (
//       <li>{item}</li>
//     )
//   })
//   return <ul>{desserts}</ul>;
// }
// export default DessertsList;

const DessertsList = (props) => {
  const lowCaloriesDesserts = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => { 
      return a.calories - b.calories; 
    })
    .map((dessert) => { 
      return ( 
        <li>
          {dessert.name} - {dessert.calories} cal 
        </li> 
      ); 
    }); 
  return <ul>{lowCaloriesDesserts}</ul>; 
 
 }
 export default DessertsList;  
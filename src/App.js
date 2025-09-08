// import logo from './logo.svg';
import './App.css';
// import Card from './card';
import Counter from './clock'

// let cards = [{id:1, name:'Василий Пупкин', price:'28 лет '},
//   {id:2, name:'Александер Пушкин', price:'32 года'},
//   {id:3, name:'Владислав Oладиков', price:'20 лет'}
// ]

function App() {
  return (
    <div className="App">
<Counter/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       {cards.map(card => (
//         <Card key={card.id} name={card.name} price={card.price}/>
//       ))}
//     </div>
//   );
// }

export default App;

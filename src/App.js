import logo from './logo.svg';
import './App.css';

function App() {
  const properties = [
    {name: 'Land', price: '2lak'},
    {name: 'Business', price: '1.5lak'}
  ]
  return (
    <div className="App">
      <Product name="Laptop" price="15000Tk"></Product>
      <Product name="Bike" price="126000Tk"></Product>

      {
        properties.map(property => <Property name={property.name} price={property.price}></Property>)
      }
      
    </div>
  );
}

function Product (props){
  return(
    <div className='product'>
      <h1>Product</h1>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

function Property(props){
  return(
    <div className="property">
      <h1>Property</h1>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>

    </div>
  )
}

export default App;

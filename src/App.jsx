// src/App.jsx
import { useState } from "react";
// import {inventoryData} from "./components/inventory.jsx";
import ShopInventory from "./components/ShopInventory.jsx";
import UserInventory from "./components/UserInventory.jsx";

const App = () => {
  const [userCart, setUserCart] = useState([]);
  function handleAdd(event) {
    console.log("Add: ",event.target);
    setUserCart([...userCart, event.target.name])
  }
  function handleRemove(event) {
    console.log('Remove: ',event.target.name);
    console.log(userCart.indexOf(event.target.name))
    console.log(userCart)
    const afterRemove = userCart.filter((item)=>{
      return userCart.indexOf(item) !== userCart.indexOf(event.target.name)
    })
    console.log(afterRemove)
    setUserCart(afterRemove);
  }
  return (
  <>
    <h1>Shop</h1>
    
    <div >
      <div className="shop">
        <p className="inventory">Shop Inventory</p>
        <p className="inventory">User Inventory</p>
      </div>
      
      <div className="shop">
        <ShopInventory className="inventory" handleAdd={handleAdd}/>
      <UserInventory className="inventory" userCart={userCart} handleRemove={handleRemove}/>
      </div>
      
    </div>
  </>
    
  );
}

export default App

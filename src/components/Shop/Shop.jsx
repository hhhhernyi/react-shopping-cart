import { useState } from "react";
import { inventoryData } from "../inventory";
import InventoryList from "../InventoryList/InventoryList";
import "./Shop.css";

export default function Shop() {
  // const [inventory, setInventory] = useState(inventoryData);
  const [shopInventory, setShopInventory] = useState(inventoryData);
  const [userInventory, setUserInventory] = useState([]);

  function handleAddItem(item) {
    setUserInventory([...userInventory, item]);
    setShopInventory(shopInventory.filter((element)=>element._id !== item._id))
  }
  function handleRemoveItem(item) {
    setShopInventory([...shopInventory, item]);
    setUserInventory(userInventory.filter((element)=>element._id !== item._id))
  }

  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        <InventoryList inventory={shopInventory} title="Shop Inventory" handleAddItem={handleAddItem}/>
        <InventoryList inventory={userInventory} title="User Inventory" handleRemoveItem={handleRemoveItem}/>
      </section>
    </main>
  );
}

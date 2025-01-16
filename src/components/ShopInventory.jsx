import {inventoryData} from "./inventory.jsx";


export default function ShopInventory(props) {
    return (
        <>
        <div className="inventory">
             {inventoryData.map((item)=>{
               return <li key={item._id}>{item.name} price: ${item.price} <button onClick={props.handleAdd} name={item.name +" $"+ item.price} >Add Item</button></li>
             })}
             </div>
        
    </>
    )
    
}
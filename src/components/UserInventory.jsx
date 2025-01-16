

export default function UserInventory(props) {
    return (
        <>
          <div className="inventory">
        {props.userCart.map((item)=>{
          return <li key={props.userCart.indexOf(item)}>{item}<button onClick={props.handleRemove} name={item}>Remove Item</button></li>
        })}
      </div>
        </>
    )
}
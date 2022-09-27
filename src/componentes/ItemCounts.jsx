import '../App.css'

const ItemCounts = ({setCount, count, stock, price}) => {


// const[count, setCount] = useState(1)

// const sumar = () =>{
//     setCount(actualValor=>actualValor+1)
// }
// const restar = () =>{
//     setCount(actualValor=>actualValor-1)
// }
const sumar = () => {
    if(count < stock) {
        setCount(count + 1)
    }
}
const restar = () => {
    if(count > 0){
        setCount(count - 1)
    }
    return;
}

return (
<>
    <div className=" h-100 text-center p-4">
    <h2 className='cant'>Cantidad: {count} Unidad</h2>
    <div className='containerButton m-4'>
<button className='btn btn-outline-dark m-2' onClick={restar} disabled={count<1}>-</button>
<button className='btn btn-outline-dark m-2' onClick={sumar} disabled={count>=stock}>+</button>
    </div>
   <h5>Total: ${count * price} </h5> 
    </div>
</>
)}
export default ItemCounts
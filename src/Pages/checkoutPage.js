import { useEffect, useState } from "react"
import axios from "axios"

export default function CheckoutPage() {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        const URL = "https://foxstore.onrender.com/checkout"
 
         axios.get(URL)
             .then(res => {            
                setOrders(res.data);
             })
             .catch(err => {
                 console.log("DEU RUIM: ", err);
             })
     } , [])



     if (orders.length === 0) {
         return (
             <div>
                 <h1>Carregando...</h1>
             </div>
         )
     }
     else{
            return (
                <div>
                    <h1>Checkout</h1>
                    <div>
                        {orders.map(obj => 
                            <div>
                                <h2>{obj.name}</h2>
                            </div>
                        )}
                    </div>
                </div>
            )
     }
}

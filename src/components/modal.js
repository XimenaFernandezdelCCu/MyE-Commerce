import '../style/modal.css'
import { addItem2Cart, removeItemFromCart } from "../utils";
import { useDispatch } from "react-redux";


export default function Modal ({clickBackdrop, modalinfo}) {
    const dispatch = useDispatch();

    return (
        <div className="backdrop" onClick={clickBackdrop} >
            <div className="modal" >
                <button onClick={clickBackdrop} >x</button>

                <div className='modalcontent' >
                    <div className='modalinfo' >
                        <div className='modala'>
                            <img className='modalimg' src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>
                            <h3>{modalinfo.price} $</h3>
                            <button>wish</button>
                        </div>
                        <div className='modalb'>
                            <h1>{modalinfo.title}</h1>
                            <h3>{modalinfo.author}</h3>
                            <p>{modalinfo.synapsis}</p>
                            <h2>Current stock: {modalinfo.stock}</h2>
                            

                        </div>
                    </div>

                    <div className='modalbtns' >
                        <button onClick={()=>{addItem2Cart(dispatch, modalinfo.pk)}}>Add to Cart</button>
                        <button>See All Details</button>
                    </div>
                </div>
                

            </div>
        </div>
    )

}
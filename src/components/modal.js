import '../style/modal.css'

export default function Modal ({clickBackdrop, title}) {
    return (
        <div className="backdrop" onClick={clickBackdrop} >
            <div className="modal" >
                <button onClick={clickBackdrop} >x</button>
                <div className='modalcontent' >
                    <div className='modalinfo' >
                        <div className='modala' style={{backgroundColor:"red"}}>
                            <img className='modalimg' src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>
                            <h3>price</h3>
                            <button>wish</button>
                        </div>
                        <div className='modalb'>
                            <h1>title</h1>
                            <h3>Author</h3>
                            <h2>stock</h2>
                            <p>details details details details details details</p>

                        </div>
                    </div>
                    <div>
                        <button>Add to Cart</button>
                        <button>See All Details</button>
                    </div>
                </div>
                

            </div>
        </div>
    )

}
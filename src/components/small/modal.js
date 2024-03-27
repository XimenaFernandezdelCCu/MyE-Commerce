import '../../style/modal.css'

export default function Modal (props) {
    return (
        <div className="backdrop" 
        id="Modal"
        onClick={props.clickBackdrop} >
            <div className="modal" >
                <button onClick={props.clickBackdrop} className='circular x' >x</button>

                {props.children}
                
            </div>
        </div>
    )

}
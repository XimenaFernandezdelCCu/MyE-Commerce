// import '../../style/modal.css'

// export default function Modal (props) {
//     return (
//         <div className="backdrop" 
//         id="Modal"
//         onClick={props.clickBackdrop} >
            
//             <div className="modal" >
//                 <button onClick={props.clickBackdrop} className='circular x' >x</button>

//                 {props.children}
                
//             </div>
//         </div>
//     )

// }

// /*To use:
// Import component, 
// add a show modal state to the component: let [showModal, setShowModal] = useState([false, ""]);
// create a function that will set showmodal to true when an event happens. 
// add the content of the modal as a child of this component. 
// add this prop to the modal component to close: 
// clickBackdrop={()=>{setShowModal([false, ""])}}

// example: 
// {showModal[0] ? 
//         <Modal clickBackdrop={()=>{setShowModal([false, ""])}} >

//           <div className='modalcontent' >
            
//           </div>

//         </Modal> : ""}
// */
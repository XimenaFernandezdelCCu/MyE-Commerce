import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { add2Cart } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import anonymousBook from '../../imgs/anonymousBook.jpg'
import { useContext } from 'react';
import { HomeContext } from '../../context/homeContext';


export default function BrowseCard({book, children}){
    const {setShowModal}= useContext(HomeContext);
    const dispatch = useDispatch();

    return (
        <div className='orangeBorderCard rounded'
        onClick={()=>setShowModal(book.pk)}
        style={{
            maxWidth: "27%",
            minWidth: "250px", 
            maxHeight: "90vh",
            margin: ".5%",
            padding: "2%",
            backgroundColor:"white"
        }}>

            <div style={{width:"100%"}}>   
            {/*---------- if product has image, display image, else, display placeholder */}
            {book.image ?
                // <img src={`${book.image}`} style={{width:"100%"}} ></img>
                <p>DB Image</p>
                
            :
                <img src={anonymousBook} style={{width:"100%"}} ></img>
            }
            </div>

            <div className='flex'>
                <FontAwesomeIcon icon={faBookOpen} className='right' />
                <h4>{book.title}</h4>
            </div>

            <h5>{book.author}</h5>
            <h5>{book.price} $</h5>

            <div className='flex' style={{justifyContent: "space-between"}} >
                <button
                onClick={(event) => {event.stopPropagation(); add2Cart(book.pk, dispatch)}}
                ><FontAwesomeIcon icon={faCartPlus} />
                </button>

                {children}
            </div>


        </div>
    )
}
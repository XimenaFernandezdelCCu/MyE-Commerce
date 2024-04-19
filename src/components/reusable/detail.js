

// inputs: name, id, type, onblur
export default function Detail(props){



    return(
        <div>
            <div 
            // style={{display:"flex"}}
             >
                <label htmlFor={props.id}>
                    <h4>{props.name}</h4>
                </label>

                <p>{props.value}</p>
                
            </div>

            {props.children}
            <hr/>
        </div>
    )
}

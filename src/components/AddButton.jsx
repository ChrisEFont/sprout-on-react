import './addButton.css'

// eslint-disable-next-line react/prop-types
export function AddButton({addLine, $line}){
    return(
        <>
            <button className="add-button" onClick={()=>addLine($line)}>ADD</button>
        </>
    )
}
import './EmptyLine'
import {useState} from 'react'
import { EmptyLine } from './EmptyLine'
import {EmptyLineR2} from './EmptyLineR2/EmptyLineR2.jsx'
import {AddedLine} from './AddedLine/AddedLine.jsx'

export function PrincingTable(){

    const [lines, setLines] = useState([]);

    function addLine(line){
        setLines(prev => [...prev, { id: crypto.randomUUID(), ...line }]);
    }

    function deleteLine(index){
        setLines((prev)=>{
            if(!prev) return prev;
            return prev.filter((line, i)=>i!==index);
        })
    }

    function updateLine(index, updatedData) {
    setLines(prev => {
        if (!prev) return prev; // o return [];
        return prev.map((line, i) =>
        i === index ? { ...line, ...updatedData } : line
        );
    });
    }

    return (
        <>
            {lines.map((line, index)=>(
                <AddedLine 
                key={line.id}
                index={index}
                data={line}
                updateLine={updateLine}
                deleteLine={deleteLine}
                />
            ))}
            <EmptyLineR2 addLine={addLine}></EmptyLineR2>
            <button onClick={()=>console.log(lines)}>A VER ESAS LINEAS</button>           
        </>
    )

}
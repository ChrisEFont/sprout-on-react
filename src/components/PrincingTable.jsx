import './EmptyLine'
import {useState} from 'react'
import { EmptyLine } from './EmptyLine'
import {EmptyLineR2} from './EmptyLineR2/EmptyLineR2.jsx'
import {AddedLine} from './AddedLine/AddedLine.jsx'

export function PrincingTable(){

    const [lines, setLines] = useState([]);

    function addLine(line){
        setLines([...lines, line]);
    }

    function deleteLine(index){
        setLines((prev)=>{
            prev.filter((line, i)=>i!==index);
        })
    }

    function updateLine(index, updatedData){
        setLines((prev)=>{
            prev.map((line, i)=>(i===index?{...line, ...updatedData}:line));
        })
    }

    return (
        <>
            {lines.map((line, index)=>(
                <AddedLine 
                key={index}
                index={index}
                data={line}
                />
            ))}
            <EmptyLineR2 addLine={addLine}></EmptyLineR2>           
        </>
    )

}
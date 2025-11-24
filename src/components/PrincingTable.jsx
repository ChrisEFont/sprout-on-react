import './EmptyLine'
import {useState} from 'react'
import { EmptyLine } from './EmptyLine'

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
            <EmptyLine addLine={addLine}/>
        </>
    )

}
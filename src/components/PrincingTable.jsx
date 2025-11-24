import './EmptyLine'
import {useState} from 'react'
import { EmptyLine } from './EmptyLine'
import {EmptyLineR2} from './EmptyLineR2/EmptyLineR2.jsx'

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
            <EmptyLineR2></EmptyLineR2>            
        </>
    )

}
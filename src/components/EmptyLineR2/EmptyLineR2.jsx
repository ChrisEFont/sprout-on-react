import './emptyLine.css'
import { useState, useRef, useEffect } from "react"
import { useLineState } from '../../hooks/useLineState';
import { BasicInfo } from './BasicInfo';
import { CotermInfo } from './CotermInfo';
import { useLineEffect } from '../../hooks/useLineEffect';


export function EmptyLineR2(props){

    const {line, setField, refs, aN} = useLineState();

    useLineEffect(line, setField, aN);

    return(
        <div key={props.key} className="line">

            <span className="index">⬆️</span>
            <BasicInfo fields={line} refs={refs} setField={setField} aN={aN} />
            <CotermInfo fields={line} refs={refs} setField={setField} aN={aN}/>
            <button onClick={console.log(line)}></button>
        </div>
    )
}
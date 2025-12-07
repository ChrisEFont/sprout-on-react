import './emptyLine.css'
import { useState, useRef, useEffect } from "react"
import { useLineState } from '../../hooks/useLineState';
import { BasicInfo } from './BasicInfo';
import { CotermInfo } from './CotermInfo';
import { useLineEffect } from '../../hooks/useLineEffect';
import { DiscounInfo } from './DiscountInfo';
import { CustomerPrices } from './CustomerPrices';
import { InternalPrices } from './InternalPrices';


export function EmptyLineR2(props){

    const {line, setField, refs, aN} = useLineState();

    useLineEffect(line, setField, aN);

    function submitLine(){
        props.addLine(line);
        console.log(line)
    }

    return(
        <div key={props.key} className="line">
            <span className="index">⬆️</span>
            <BasicInfo fields={line} refs={refs} setField={setField} aN={aN} />
            <CotermInfo fields={line} refs={refs} setField={setField} aN={aN} />
            <DiscounInfo fields={line} refs={refs} setField={setField} aN={aN} />
            <CustomerPrices fields={line} refs={refs} setField={setField} aN={aN}/>
            <button onClick={submitLine}>ADD</button>
            <InternalPrices flieds={line} refs={refs} setField={setField} aN={aN}/>
        </div>
    )
}
import './emptyLine.css'
import { useState, useRef, useEffect } from "react"
import { useLineState } from '../../hooks/useLineState';
import { BasicInfo } from './BasicInfo';
import { CotermInfo } from './CotermInfo';
import { useLineEffect } from '../../hooks/useLineEffect';
import { useAddedLineEffect } from '../../hooks/useAddedLineEffect';
import { DiscounInfo } from './DiscountInfo';
import { CustomerPrices } from './CustomerPrices';
import { InternalPrices } from './InternalPrices';


export function AddedLine(props){

    const {line, setField, refs, aN} = useLineState(props.data);

    useLineEffect(line, setField, aN);

    useAddedLineEffect(line, setField, aN, props.index, props.updateLine);

    function deleteLine(){
        props.deleteLine(props.index);
    }

    function mostrarLine(){
        console.log(line);
    }

    return(
        <div className="line">

            <span className="index">{props.index}</span>
            <BasicInfo fields={line} refs={refs} setField={setField} aN={aN} />
            <CotermInfo fields={line} refs={refs} setField={setField} aN={aN} />
            <DiscounInfo fields={line} refs={refs} setField={setField} aN={aN} />
            <CustomerPrices fields={line} refs={refs} setField={setField} aN={aN}/>
            <button onClick={deleteLine}>XXX</button>
            <InternalPrices flieds={line} refs={refs} setField={setField} aN={aN}/>
        </div>
    )
}
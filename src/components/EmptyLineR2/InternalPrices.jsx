export function InternalPrices({fields, refs, setField, aN}){
    return(
                    <div className='internal-prices' id="internal-prices">
                        <input type="text" className="price" id="total-cost" ref={refs.finalCost} readOnly />
                        <input type="text" className="profit" ref={refs.profit} readOnly />                
                    </div> 
    )
}
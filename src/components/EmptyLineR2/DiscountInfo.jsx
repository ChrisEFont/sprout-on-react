export function DiscounInfo({fields, refs, setField, aN}){

    return (
        <div className='discount-grid' id="discount-data">
            <input type="text" className="rh-discount" ref={refs.rhDiscount} onBlur={()=>setField('rhDiscount', aN.rhDiscount.current.getNumber())}/>
            <input type="checkbox" className="transfer-discount" checked={fields.transferDiscount} onChange={(e)=>{setField('transferDiscount', e.target.checked)}} />
            <input type="text" className="nx-discountg" ref={refs.nxDiscount} onBlur={()=>setField('nxDiscount', aN.nxDiscount.current.getNumber())}/>
        </div>
    )
}
export function BasicInfo({fields, refs, setField, aN}){

    return (
        <div className='y-box' id="initial-data">
                <div className='initial-grid'>
                    <select className="sale-type" id="sale-type" value={fields.saleType} onChange={(e)=>setField('saleType', e.target.value)}>
                        <option value="0">REN</option>
                        <option value="1">NEW</option>
                    </select>
                    <input type="text" className="contract" placeholder='contract...' onChange={(e)=>setField('contract', e.target.value)}/>
                    <input type="text" className="sku" placeholder='sku...' onChange={(e)=>setField('sku', e.target.value)}/>
                    <input type="number" className="quantity" placeholder='qty...' onChange={(e)=>setField('quantity', e.target.value)}/>
                    <input type="text" className="price" id="list-price" ref={refs.listPrice} onBlur={()=>setField('listPrice', aN.listPrice.current.getNumber())}/>
                    <input type="text" className="price" id="total-list-price" ref={refs.totalListPrice} readOnly/>
                </div>
                <input type="text" className="description" placeholder='description...' readOnly/>
        </div>
    )
}
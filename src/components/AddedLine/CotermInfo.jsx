export function CotermInfo({fields, refs, setField, aN}){


    return(
        <div className='coterm-grid' id="coterm-data">
            <div className='y-box'>
                <input type="date" className="start-date" onChange={(e)=>setField('startDate', e.target.value)} defaultValue={fields.startDate}/>
                <input type="date" className="end-date" onChange={(e)=>setField('endDate', e.target.value)} defaultValue={fields.endDate}/>
            </div>

            <div className='y-box' id="select">
                <select className="coterm" id="coterm" value={fields.coterm} onChange={(e)=>setField('coterm', e.target.value)}>
                    <option value="0">NO</option>
                    <option value="1">SI</option>
                </select>
                <input type="number" className='dias' value={fields.days} readOnly />
            </div>

            <input type="text" className="price" id="coterm-list-price" ref={refs.cotermPrice} readOnly defaultValue={fields.cotermListPrice}/>
            <input type="text" className="price" id="total-coterm-list-price" ref={refs.totalCotermPrice} readOnly />
        </div>
    )
}
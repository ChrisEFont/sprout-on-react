export function CustomerPrices({fields, refs, setField, aN}){
    return (
        <div className='customer-grid' id="customer-data">
            <input type="text" className="price" id="customer-price" ref={refs.customerPrice} readOnly />
            <input type="text" className="price" id="total-customer-price" ref={refs.totalCustomerPrice} readOnly />
        </div>
    )
}
import './line.css'
import './AddButton'
import './DeleteButton'
import { DeleteButton } from './DeleteButton';
import { } from 'react';



export function AddedLine(props){

    return (
        <>
            <div key={props.key} className="line">
                <span className="index">{props.index+1}</span>

                <select name="sale-type" id="sale-type" value={props.type}>
                    <option value="0">REN</option>
                    <option value="1">NEW</option>
                </select>
                <input type="text" className="sku" placeholder='sku...' value={props.sku}/>
                <input type="text" className="description" placeholder='description...' value={props.description}/>
                <input type="text" className="contract" placeholder='contract...' value={props.contract}/>                
                <input type="number" className="quantity" placeholder='qty...' value={props.quantity}/>                
                <input type="text" className="price" id="list-price" value={props.listPrice}/>
                <input type="text" className="price" id="total-list-price" value={props.totalListPrice}/>
                <select name="coterm" id="coterm" value={props.coterm}>
                    <option value="0">NO</option>
                    <option value="1">SI</option>
                </select>
                <input type="date" className="start-date" value={props.startDate}/>
                <input type="date" className="end-date" value={props.endDate}/>
                <input type="text" className="price" id="coterm-list-price" value={props.cotermListPrice}/>
                <input type="text" className="price" id="total-coterm-list-price" value={props.totalCotermListPrice}/>
                <input type="number" className="rh-discount" value={props.rhDiscount}/>
                <input type="checkbox" className="transfer-discount" value={props.transferDiscount}/>
                <input type="number" className="nx-discountg" value={props.nxdiscount}/>
                <input type="text" className="price" id="customer-price" value={props.customerPrice}/>
                <input type="text" className="price" id="total-customer-price" value={props.totalCustomerPrice}/>
                <input type="text" className="price" id="total-cost" value={props.totalCost}/>
                <input type="number" className="profit" value={props.profit}/>
                <DeleteButton/>
            </div>
        </>
    )   
}
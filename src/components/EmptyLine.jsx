import './emptyLine.css'
import { DeleteButton } from './DeleteButton';
import { AddButton } from './AddButton';
import { useState, useRef, useEffect } from "react"
import { useAutoNumeric } from '../hooks/useAutonumeric';


export function EmptyLine(props){

    const [saleType, setSaleType]=useState("0");
    const [sku, setSku]=useState("");
    const [description, setDescription] = useState("");
    const [contract, setContract]=useState("");
    const [quantity, setQuantity]=useState("");
    const [listPrice, setListPrice]=useState("0");
    const [totalListPrice, setTotalListPrice]=useState("");
    const [coterm, setCoterm]=useState("0");
    const [days, setDays]=useState();
    const [startDate, setStartDate]=useState("");
    const [endDate, setEndDate]=useState("");
    const [cotermPrice, setCotermPrice]=useState("");
    const [totalCotermPrice, setTotalCotermPrice]=useState("");
    const [rhDiscount, setRHDiscoun]=useState(0);
    const [transferDiscount, setTransferDiscount]=useState(true);
    const [nxDiscount, setNXDiscount]=useState(0);
    const [customerPrice, setCustomerPrice]=useState("");
    const [totalCustomerPrice, setTotalCustomerPrice]=useState("");
    const [finalCost, setFinalCost]=useState("");
    const [profit, setProfit]=useState("");

    const listPriceRef = useRef(null);
    const totalListPriceRef = useRef(null);
    const cotermPriceRef = useRef(null);
    const totalCotermPriceRef = useRef(null);
    const rhDiscountRef = useRef(null);
    const nxDiscountRef = useRef(null);
    const customerPriceRef = useRef(null);
    const totalCustomerPriceRef = useRef(null);
    const finalCostRef = useRef(null);
    const profitRef = useRef(null);

    const priceFormatRound = {
        currencySymbol: "$ ",
        decimalCharacter: ".",
        digitGroupSeparator: ",",
        decimalPlaces: 0
    }

    const priceFormatDecimals = {
        currencySymbol: "$ ",
        decimalCharacter: ".",
        digitGroupSeparator: ",",
        decimalPlaces: 2
    }

    const percentFormat ={
        suffixText: ' %',
        decimalPlaces: 0
    }

    const listPriceAN = useAutoNumeric(listPriceRef, priceFormatRound);
    const totalListPriceAN = useAutoNumeric(totalListPriceRef, priceFormatRound);
    const cotermPriceAN = useAutoNumeric(cotermPriceRef, priceFormatDecimals);
    const totalCotermPriceAN = useAutoNumeric(totalCotermPriceRef, priceFormatDecimals);
    const rhDiscountAN = useAutoNumeric(rhDiscountRef, percentFormat);
    const nxDiscountAN = useAutoNumeric(nxDiscountRef, percentFormat);
    const customerPriceAN = useAutoNumeric(customerPriceRef, priceFormatDecimals);
    const totalCustomerPriceAN = useAutoNumeric(totalCustomerPriceRef, priceFormatDecimals);
    const finalCostAN = useAutoNumeric(finalCostRef, priceFormatRound);
    const profitAN = useAutoNumeric(profitRef, percentFormat);

    function handleSaleType(e){
        setSaleType(e.target.value);
    }

    function handleSku(e){
        setSku(e.target.value);
    }

    function handleDescription(e){
        setDescription(e.target.value);
    }

    function handleContract(e){
        setContract(e.target.value);
    }

    function handleQuantity(e){
        setQuantity(e.target.value);
    }

    function handleListPrice(e){
        setListPrice(listPriceAN.current.getNumber());
    }

    function handleTotalListPrice(){
        setTotalListPrice(Number(quantity)*Number(listPrice));
    }

    function handleCoterm(e){
        setCoterm(e.target.value);
    }

    function handleStartDate(e){
        setStartDate(e.target.value);
    }

    function handleEndDate(e){
        setEndDate(e.target.value);
    }

    function handleDays(){
        if(coterm==="1"){
            setDays((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1);
        }else{
            setDays("");
        }
        
    }

    function handleCotermPrice() {
        if (coterm === "1") {
            setCotermPrice((listPrice / 365) * days);
        }else{
            setCotermPrice("");
        };
    }

    function handleCotermTotalPrice(){
        if(coterm === "1"){
            setTotalCotermPrice(quantity*cotermPrice);
        }else{
            setTotalCotermPrice("");
        }
        
    }

    function handleRHDiscount(){
        setRHDiscoun(rhDiscountAN.current.getNumber());
    }

    function handleTransferDiscount(e){
        setTransferDiscount(e.target.checked);
        console.log(e.target.checked);
    }

    function handleNXDiscount(){
        setNXDiscount(nxDiscountAN.current.getNumber());
    }

    function handleCustomerPrice(){
        if(coterm==="0"){
            if(!transferDiscount){
                setCustomerPrice(Number(listPrice)*(1-nxDiscount/100));            }else{
                setCustomerPrice(Number(listPrice)*(1-((nxDiscount+rhDiscount)/100)));
            }
        }else{
            if(!transferDiscount){
                setCustomerPrice(Number(cotermPrice)*(1-nxDiscount/100));
            }else{
                setCustomerPrice(Number(cotermPrice)*(1-((nxDiscount+rhDiscount)/100)));
            }
        }
    }

    function handleTotalCustomerPrice(){
        setTotalCustomerPrice(Number(quantity)*Number(customerPrice));
    }

    function handleFinalCost(volumeDiscount){
        setFinalCost(Number(totalListPrice*(1-volumeDiscount/100)));
    }

    function handleProfit(){
        setProfit(totalCustomerPrice-finalCost);
    }

    // USE EFFECT //

    useEffect(()=>{
        handleTotalListPrice();
    }, [quantity, listPrice]);

    useEffect(()=>{
        totalListPriceAN.current.set(totalListPrice)
    }, [totalListPrice]);

    useEffect(() => {
        handleDays();
    }, [coterm, startDate, endDate]);

    useEffect(()=>{
        handleCotermPrice();
    }, [days, listPrice]);

    useEffect(()=>{
        cotermPriceAN.current.set(cotermPrice);
    }, [cotermPrice]);

    useEffect(()=>{
        handleCotermTotalPrice();
    }, [cotermPrice, quantity]);

    useEffect(()=>{
        totalCotermPriceAN.current.set(totalCotermPrice);
    }, [totalCotermPrice]);

    useEffect(()=>{
        handleCustomerPrice();
    }, [totalListPrice, totalCotermPrice, rhDiscount, transferDiscount, nxDiscount]);

    useEffect(()=>{
        customerPriceAN.current.set(customerPrice);
    }, [customerPrice]);

    useEffect(()=>{
        handleTotalCustomerPrice();
    }, [quantity, customerPrice]);

    useEffect(()=>{
        totalCustomerPriceAN.current.set(totalCustomerPrice)
    });


    function mostrarTotal(){
        console.log(customerPrice);
    }

    return(
        <div key={props.key} className="line">

            <span className="index">⬆️</span>

            <div className='y-box' id="initial-data">
                <div className='initial-grid'>
                    <select className="sale-type" id="sale-type" value={saleType} onChange={handleSaleType}>
                        <option value="0">REN</option>
                        <option value="1">NEW</option>
                    </select>
                    <input type="text" className="contract" placeholder='contract...' onChange={handleContract}/>
                    <input type="text" className="sku" placeholder='sku...' onChange={handleSku}/>
                    <input type="number" className="quantity" placeholder='qty...' onChange={handleQuantity}/>
                    <input type="text" className="price" id="list-price" ref={listPriceRef} onBlur={handleListPrice}/>
                    <input type="text" className="price" id="total-list-price" ref={totalListPriceRef} readOnly/>
                </div>
                <input type="text" className="description" placeholder='description...' onChange={handleDescription} readOnly/> 
            </div>


            <div className='coterm-grid' id="coterm-data">
                <div className='y-box'>
                    <input type="date" className="start-date" onChange={handleStartDate} />
                    <input type="date" className="end-date" onChange={handleEndDate} />
                </div>

                <div className='y-box' id="select">
                    <select className="coterm" id="coterm" value={coterm} onChange={handleCoterm}>
                        <option value="0">NO</option>
                        <option value="1">SI</option>
                    </select>
                    <input type="number" className='dias' value={days} readOnly/>
                </div>


                <input type="text" className="price" id="coterm-list-price" ref={cotermPriceRef} readOnly />
                <input type="text" className="price" id="total-coterm-list-price" ref={totalCotermPriceRef} readOnly />
            </div>

            
            <div className='discount-grid' id="discount-data">
                <input type="text" className="rh-discount" ref={rhDiscountRef} onKeyUp={handleRHDiscount} />
                <input type="checkbox" className="transfer-discount" checked={transferDiscount} onChange={handleTransferDiscount} />
                <input type="text" className="nx-discountg" ref={nxDiscountRef} onKeyUp={handleNXDiscount} />
            </div>


            <div className='customer-grid' id="customer-data">
                <input type="text" className="price" id="customer-price" ref={customerPriceRef} readOnly />
                <input type="text" className="price" id="total-customer-price" ref={totalCustomerPriceRef} readOnly />
            </div>


            <div className='internal-grid' id="internal-data">
                <AddButton></AddButton>
                <input type="text" className="price" id="total-cost" ref={finalCostRef} readOnly />
                <input type="text" className="profit" ref={profitRef} readOnly />                
            </div>           

        </div>
    )
}
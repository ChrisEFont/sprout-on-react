import { useState, useEffect } from 'react';
import {Line } from './Line'
import { AddedLine } from './AddedLine';

export function PrincingTableOLD(){

const [lines, setLines]= useState([]);

    const elementosPrueba = [
        {

            type: "0",
            sku: "RH0003",
            description: "RHEL",
            contract: "9999",
            quantity: 1,
            listPrice: "870",
            totalListPrice: "870",
            coterm: "0",
            startDate: "2025-11-06",
            endDate: "2025-11-05",
            cotermListPrice: "",
            totalCotermListPrice: "",
            rhDiscount: 0,
            transferDiscount: false,
            nxDiscount: "",
            customerPrice: "870",
            totalCustomerPrice: "870",
            totalCost: "652.5",
            profit: 14
        }
    ]

    function addLine(line){
        setLines([...lines, line])
    };

    useEffect(() => {
        console.log("LINEA AGREGADA");
        console.log(lines);
    }, [lines]);

    return 



    // return (
    //     <section className="pricing-table">
    //         <Line addLine={addLine}/>
    //         {elementosPrueba.map((line, index) => (
    //             <AddedLine
    //                 key={index}
    //                 index={index}
    //                 type={line.type}
    //                 sku={line.sku}
    //                 description={line.description}
    //                 contract={line.contract}
    //                 quantity={line.quantity}
    //                 listPrice={line.listPrice}
    //                 totalListPrice={line.totalListPrice}
    //                 coterm={line.coterm}
    //                 startDate={line.startDate}
    //                 endDate={line.endDate}
    //                 cotermListPrice={line.cotermListPrice}
    //                 totalCotermListPrice={line.totalCotermListPrice}
    //                 rhDiscount={line.rhDiscount}
    //                 transferDiscount={line.transferDiscount}
    //                 nxDiscount={line.nxDiscount}
    //                 customerPrice={line.customerPrice}
    //                 totalCustomerPrice={line.totalCustomerPrice}
    //                 totalCost={line.totalCost}
    //                 profit={line.profit}
    //             />
    //         ))}
            
    //     </section>
    // )

}
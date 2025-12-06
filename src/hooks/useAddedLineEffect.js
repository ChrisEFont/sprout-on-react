import { useEffect } from "react"
import { calculateDays, totalPxQ, calculateCotermPrice, calculateCustomerPrice } from "../utils/princingFunctions"
import { use } from "react";

export function useAddedLineEffect(line, setField, aN){

    useEffect(() => {
        const total = totalPxQ(line.listPrice, line.quantity)
        setField('totalListPrice', total);
    }, [])

    useEffect(() => {
        aN.totalListPrice.current.set(line.totalListPrice);
    }, [])

    useEffect(()=>{
        const days = calculateDays(line.startDate, line.endDate);
        setField('days', days);
    }, [])

    useEffect(()=>{
        const cotermPrice = calculateCotermPrice(line.listPrice, line.days, line.coterm);        
        setField('cotermPrice', cotermPrice);
    },[])

    useEffect(()=>{
        aN.cotermPrice.current.set(line.cotermPrice);
    }, [])

    useEffect(()=>{
        const totalCotermPrice = totalPxQ(line.cotermPrice, line.quantity);
        setField('totalCotermPrice', totalCotermPrice);
    },[])

    useEffect(()=>{
        aN.totalCotermPrice.current.set(line.totalCotermPrice);
    }, [])

    useEffect(()=>{
        aN.rhDiscount.current.set(line.rhDiscount);
    }, [])

    useEffect(()=>{
        aN.nxDiscount.current.set(line.nxDiscount);
    }, [])

    useEffect(()=>{
        const customerPrice = calculateCustomerPrice(line.listPrice, line.coterm, line.cotermPrice, line.rhDiscount, line.transferDiscount, line.nxDiscount);
        setField('customerPrice', customerPrice);
    },[])

    useEffect(()=>{
        aN.customerPrice.current.set(line.customerPrice);
    }, [])

    useEffect(()=>{
        const totalCustomerPrice = totalPxQ(line.customerPrice, line.quantity);
        setField('totalCustomerPrice', totalCustomerPrice)
    }, [])

    useEffect(()=>{
        aN.totalCustomerPrice.current.set(line.totalCustomerPrice);
    }, [])

}
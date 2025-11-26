import { useEffect } from "react"
import { calculateDays, totalPxQ, calculateCotermPrice, calculateCustomerPrice } from "../utils/princingFunctions"
import { use } from "react";

export function useLineEffect(line, setField, aN){

    useEffect(() => {
        const total = totalPxQ(line.listPrice, line.quantity)
        setField('totalListPrice', total);
    }, [line.quantity, line.listPrice])

    useEffect(() => {
        aN.totalListPrice.current.set(line.totalListPrice);
    }, [line.totalListPrice])

    useEffect(()=>{
        const days = calculateDays(line.startDate, line.endDate);
        setField('days', days);
    }, [line.startDate, line.endDate])

    useEffect(()=>{
        const cotermPrice = calculateCotermPrice(line.listPrice, line.days, line.coterm);        
        setField('cotermPrice', cotermPrice);
    },[line.listPrice, line.days, line.coterm])

    useEffect(()=>{
        aN.cotermPrice.current.set(line.cotermPrice);
    }, [line.cotermPrice])

    useEffect(()=>{
        const totalCotermPrice = totalPxQ(line.cotermPrice, line.quantity);
        setField('totalCotermPrice', totalCotermPrice);
    },[line.quantity, line.cotermPrice])

    useEffect(()=>{
        aN.totalCotermPrice.current.set(line.totalCotermPrice);
    }, [line.totalCotermPrice])

    useEffect(()=>{
        const customerPrice = calculateCustomerPrice(line.listPrice, line.coterm, line.cotermPrice, line.rhDiscount, line.transferDiscount, line.nxDiscount);
        setField('customerPrice', customerPrice);
    },[line.listPrice, line.coterm, line.cotermPrice, line.rhDiscount, line.transferDiscount, line.nxDiscount])

    useEffect(()=>{
        aN.customerPrice.current.set(line.customerPrice);
    }, [line.customerPrice])

    useEffect(()=>{
        const totalCustomerPrice = totalPxQ(line.customerPrice, line.quantity);
        setField('totalCustomerPrice', totalCustomerPrice)
    }, [line.quantity, line.customerPrice])

    useEffect(()=>{
        aN.totalCustomerPrice.current.set(line.totalCustomerPrice);
    }, [line.totalCustomerPrice])




}
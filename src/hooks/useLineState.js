import { useState, useRef, useEffect } from "react";
import { useAutoNumericInstance } from "./useAutonumericInstance";
import { priceFormatDecimals, priceFormatRound, percentFormat } from "../utils/numbersFormat";

export function useLineState(initial = {}) {
  const [line, setLine] = useState({
    saleType: '0',
    sku: '',
    description: '',
    contract: '',
    quantity: 0,
    listPrice: "",
    totalListPrice: 0,
    coterm: '0',
    days: '',
    startDate: '',
    endDate: '',
    cotermPrice: 0,
    totalCotermPrice: 0,
    rhDiscount: 0,
    transferDiscount: true,
    nxDiscount: 0,
    customerPrice: 0,
    totalCustomerPrice: 0,
    finalCost: 0,
    profit: 0,
    ...initial // <---- permite inicializar con datos externos
    });

    const setField = (field, value) => setLine(prev => ({ ...prev, [field]: value }));

    const refs = {
        listPrice: useRef(null),
        totalListPrice: useRef(null),
        cotermPrice: useRef(null),
        totalCotermPrice: useRef(null),
        rhDiscount: useRef(null),
        nxDiscount: useRef(null),
        customerPrice: useRef(null),
        totalCustomerPrice: useRef(null),
        finalCost: useRef(null),
        profit: useRef(null)
    };

    const aN = {
        listPrice : useAutoNumericInstance(refs.listPrice, priceFormatRound),
        totalListPrice : useAutoNumericInstance(refs.totalListPrice, priceFormatRound),
        cotermPrice : useAutoNumericInstance(refs.cotermPrice, priceFormatDecimals),
        totalCotermPrice : useAutoNumericInstance(refs.totalCotermPrice, priceFormatDecimals),
        rhDiscount : useAutoNumericInstance(refs.rhDiscount, percentFormat),
        nxDiscount : useAutoNumericInstance(refs.nxDiscount, percentFormat),
        customerPrice : useAutoNumericInstance(refs.customerPrice, priceFormatDecimals),
        totalCustomerPrice : useAutoNumericInstance(refs.totalCustomerPrice, priceFormatDecimals),
        finalCost : useAutoNumericInstance(refs.finalCost, priceFormatRound),
        profit : useAutoNumericInstance(refs.profit, percentFormat)
    }

    return {line, setField, refs, aN};

}
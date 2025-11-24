import { useEffect } from "react"
import { totalPxQ } from "../utils/princingFunctions"
import { updateTotalListPrice } from "../utils/princingFunctions"

export function useLineEffect(line, setField, aN){

    useEffect(() => {
        updateTotalListPrice(line, setField, aN)
    }, [line.quantity, line.listPrice])

    useEffect(() => {
        aN.totalListPrice.current.set(line.totalListPrice);
    }, [line.totalListPrice])
}
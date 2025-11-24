export function totalPxQ(p, q){
    return p*q;
}

export function updateTotalListPrice(line, setField, aN){
    setField('totalListPrice', totalPxQ(line.quantity, line.listPrice));      
}
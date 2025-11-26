export function totalPxQ(p, q){
    if(p && q){
        return p*q;
    }else{
        return "";
    }
}

export function calculateDays(startDate, endDate){
    if(startDate && endDate){
        return (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1;

    }else{
        return "";
    }
}

export function calculateCotermPrice(listPrice, days, coterm){  
    if(listPrice && days && coterm!=0){
        return listPrice/365*days;
    }else{
        return "";
    }
}

export function calculateCustomerPrice(listPrice, coterm, cotermPrice, rhDiscount, transferDiscount, nxDiscount) {

    if (listPrice) {
        if (coterm === "0") {
            if (!transferDiscount) {
                return Number(listPrice) * (1 - nxDiscount / 100);
            } else {
                return Number(listPrice) * (1 - ((nxDiscount + rhDiscount) / 100));
            }
        } else {
            if (!transferDiscount) {
                return Number(cotermPrice) * (1 - nxDiscount / 100);
            } else {
                return Number(cotermPrice) * (1 - ((nxDiscount + rhDiscount) / 100));
            }
        }
    }else{
        return "";
    }


}
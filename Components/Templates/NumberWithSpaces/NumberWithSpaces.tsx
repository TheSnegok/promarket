const numberWithSpaces = (x: number, bill = false): string => {
    let response = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    if(bill) {
        response += ` ₽`;
    }
    return response;
}

export { numberWithSpaces };
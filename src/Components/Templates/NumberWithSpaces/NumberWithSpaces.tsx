const numberWithSpaces = (x: number): string => {
    const response = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return response;
}

export { numberWithSpaces };
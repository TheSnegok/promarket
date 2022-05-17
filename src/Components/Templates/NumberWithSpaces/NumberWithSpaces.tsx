type numberWithSpaces = (x: number) => number;
const numberWithSpaces = (x: numberWithSpaces) => {
    const response = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return +response;
}

export { numberWithSpaces };
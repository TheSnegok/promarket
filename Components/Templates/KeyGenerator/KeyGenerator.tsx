const getPersonalKey = (): string => {
    const getLetter = () => {
        const letter = Math.floor(Math.random() * (4 - 1) + 1);
        if(letter === 1) {
            return Math.random() ? 'a' : 'A';
        } else if(letter === 2) {
            return Math.random() ? 'b' : 'B';
        } else if(letter === 3) {
            return Math.random() ? 'C' : 'C';
        }
    }    
    return `${Math.floor(Math.random() * 1000)}` + getLetter();
}

export default getPersonalKey;

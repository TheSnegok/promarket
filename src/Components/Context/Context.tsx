import { createContext } from "react";

interface IContext {
    likes: (number | null | string[])[];
    basket: (number | null | string[])[];
}

const memoryApp = {
    likes: [0, null],
    basket: [0, null]
}

const Context = createContext<IContext>(memoryApp);

export default Context;
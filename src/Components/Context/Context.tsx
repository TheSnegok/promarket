import { createContext, FC } from "react";

interface IContext {
    likes: (number | string[] | null)[];
    setLikes: () => void;
    basket: (number | string[] | null)[];
}

let memoryApp = {
    likes: [0, null],
    setLikes: () => {
        if(memoryApp.likes[0] !== null) {
            memoryApp.likes[0] += 1;
        }
        console.log(memoryApp.likes[0]);
    },
    basket: [0, null]
}

const Context = createContext<IContext>(memoryApp);

const Provider: FC = ({ children }) => {
    return (
        <Context.Provider value={memoryApp} >
            {children}
        </Context.Provider>
    )
}

export { Provider, Context };
import { useState } from 'react'

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState)

    const incremento = () => {
        setCounter( counter + 1);
    }


    return {
        counter,
        incremento
    };
        
        
    ;
}

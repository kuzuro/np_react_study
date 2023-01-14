import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {

    const [deboundValue, setDeboundValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDeboundValue(value);
        }, delay);


        return () => {
            clearTimeout(timer);
        }

    }, [value, delay]);




    return deboundValue;
}
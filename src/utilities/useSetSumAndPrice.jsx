import { useEffect } from "react";

const useSetSumAndPrice = (adults, kids, retired, onSumChange, setticketTypes) => {
    useEffect(() => {
        const newSum = adults + kids + retired;
        setticketTypes({ adults, kids, retired })
        if (typeof onSumChange === 'function') {
            onSumChange(newSum);
        }
    }, [adults, kids, retired, onSumChange]);

};

export default useSetSumAndPrice;
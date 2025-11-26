import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export function CompareProvider({ children }) {
    const [compareList, setCompareList] = useState([]);

    const addToCompare = (product) => {
        if (!product) return;

        if (compareList.find((p) => p.productId === product.productId)) return;
        if (compareList.length >= 3) return alert("You can only compare up to 3 products.");

        setCompareList([...compareList, product]);
    };

    const removeFromCompare = (id) => {
        setCompareList(compareList.filter((p) => p.productId !== id));
    };

    const clearCompare = () => setCompareList([]);

    return (
        <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare }}>
            {children}
        </CompareContext.Provider>
    );
}

export function useCompare() {
    return useContext(CompareContext);
}

import { useEffect } from 'react';

const useLoadDropDown = (
    path: string, setIsLoading: Function, setCurrentValue: Function, setValueList: Function
): void => {
    useEffect(() => {
        const loadDropDownDate = async (path: string) => {
            const resp = await fetch(path);
            const data = await resp.json();
            await setValueList(data["data"]);
            await setCurrentValue(data["data"][0].value);
            await setIsLoading(false);
        };  
    
        loadDropDownDate(path);
    }, [])
};

export default useLoadDropDown;
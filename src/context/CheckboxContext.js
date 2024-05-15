
import React, { createContext,  useState } from 'react';

export const CheckboxContext = createContext();

const CheckboxContextProvider = (props) => {
    const [checkedItems, setCheckedItems] = useState(false);
    const toggleCheckbox = (id) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <CheckboxContext.Provider value={{ checkedItems, toggleCheckbox }}>
        {props.children}
        </CheckboxContext.Provider>
    );
};

export default CheckboxContextProvider;
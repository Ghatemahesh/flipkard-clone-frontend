import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children})=>{
    const [account , togleAccount] = useState('')
    
    return (
        <DataContext.Provider value={{
            account, 
            togleAccount
        }}>
            {children}
        </DataContext.Provider>
    )

}
export default DataProvider
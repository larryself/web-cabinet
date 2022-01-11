import React, {useReducer} from 'react';
import AppRouter from "./components/appRouter/appRouter";
import {reducer, initialStore} from "./reducer/reducer";
import GlobalContext from "./context/context";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    const [GlobalState, GlobalDispatch] = useReducer(reducer, initialStore);
    return (
        <GlobalContext.Provider
            value={{
                GlobalState,
                GlobalDispatch,
            }}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
};

export default App;
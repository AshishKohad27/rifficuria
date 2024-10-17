// context/VisibilityContext.js
import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
    isComponentVisible: true,
};

// Create context
const VisibilityContext = createContext();

// Reducer function
const visibilityReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_COMPONENT':
            return { ...state, isComponentVisible: !state.isComponentVisible };
            break;
        case 'TOGGLE_COMPONENT_TRUE':
            return { ...state, isComponentVisible: true };
            break;
        default:
            return state;
    }
};

// Provider component
export const VisibilityProvider = ({ children }) => {
    const [state, dispatch] = useReducer(visibilityReducer, initialState);

    return (
        <VisibilityContext.Provider value={{ state, dispatch }}>
            {children}
        </VisibilityContext.Provider>
    );
};

// Export context for use in other components
export const useVisibility = () => React.useContext(VisibilityContext);

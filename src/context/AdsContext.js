import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
    ads: []
};

const adsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_AD':
            return { ...state, ads: [...state.ads, action.payload] };
        case 'REMOVE_AD':
            return { ...state, ads: state.ads.filter(ad => ad.id !== action.payload) };
        case 'EDIT_AD':
            return {
                ...state,
                ads: state.ads.map(ad =>
                    ad.id === action.payload.id ? { ...ad, title: action.payload.title, description: action.payload.description } : ad
                )
            };
        case 'SET_ADS':
            return { ...state, ads: action.payload };
        default:
            return state;
    }
};


export const AdsContext = createContext();

export const AdsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(adsReducer, initialState);

    useEffect(() => {
        const storedAds = JSON.parse(localStorage.getItem('ads'));
        if (storedAds) {
            dispatch({ type: 'SET_ADS', payload: storedAds });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ads', JSON.stringify(state.ads));
    }, [state.ads]);

    return (
        <AdsContext.Provider value={{ ads: state.ads, dispatch }}>
            {children}
        </AdsContext.Provider>
    );
};

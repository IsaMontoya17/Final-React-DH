import { createContext, useContext, useEffect, useReducer } from 'react';

const getInitialFavs = () => {
    try {
        const storedFavs = JSON.parse(localStorage.getItem('favs'));
        return storedFavs || [];
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return [];
    }
};

const initialState = {
    favs: getInitialFavs()
};

const favsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVS':
            return {
                ...state,
                favs: action.payload
            }
        case 'ADD_TO_FAVS':
            return {
                ...state,
                favs: [...state.favs, action.payload]
            }
        case 'DELETE_FROM_FAVS':
            return {
                ...state,
                favs: state.favs.filter((character) => String(character.id) !== String(action.payload))
            }
        default:
            return state;
    }
}

const FavsContext = createContext();

export const FavsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(favsReducer, initialState);

    useEffect(() => {
        try {
            localStorage.setItem('favs', JSON.stringify(state.favs));
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }, [state.favs]);

    const addToFavs = (character) => {
        dispatch({ type: 'ADD_TO_FAVS', payload: character });
    }

    const deleteFromFavs = (id) => {
        dispatch({ type: 'DELETE_FROM_FAVS', payload: id });
    };

    return (
        <FavsContext.Provider value={{ favs: state.favs, addToFavs, deleteFromFavs }}>
            {children}
        </FavsContext.Provider>
    )
}

export const useFavs = () => {
    return useContext(FavsContext);
};



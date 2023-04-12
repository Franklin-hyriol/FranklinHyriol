import { createSlice } from '@reduxjs/toolkit';
import useGetLocalStorageValue from '../../hooks/useGetLocalStorageValue';

const localStorageValue = useGetLocalStorageValue();

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: localStorageValue,
    },
    reducers: {
        setTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
            window.localStorage.setItem('theme', state.value);
        }
    },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
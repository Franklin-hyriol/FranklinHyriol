const useGetLocalStorageValue = () => {
    if (window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme');
    } else {
        window.localStorage.setItem('theme', 'light');
        return window.localStorage.getItem('theme');
    }
}

export default useGetLocalStorageValue;
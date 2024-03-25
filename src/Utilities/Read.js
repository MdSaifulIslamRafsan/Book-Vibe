const getLocalStorageReadData = () =>{
    const getLocalStorage = localStorage.getItem('readData');
    if(getLocalStorage){
        return JSON.parse(getLocalStorage);
    }
    return [];
}
const setLocalStorageReadData = (id) => {
    const getLocalStorage = getLocalStorageReadData();
    const addLocalStorage = [...getLocalStorage , id];
    const saveLocalStorage = JSON.stringify(addLocalStorage);
    localStorage.setItem('readData' , saveLocalStorage);
}


export {setLocalStorageReadData , getLocalStorageReadData};
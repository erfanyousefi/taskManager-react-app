import { createContext, useState } from "react"

export const FavoritesTasksContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addItem: (task) => { },
    removeItem: (itemID) => { },
    existItem: (itemID) => { }
})
 function FavoriteTasksProvider(props) {
    const [userFavorites, setUserFavorite] = useState([])
    function addToUserFavorites(task) {
        setUserFavorite(prevItems => {
            return prevItems.concat(task)
        })
    }
    function removeTaskInFavorite(taskID) {
        setUserFavorite(prevItems => {
            return prevItems.filter(item => item.id !== taskID)
        })
    }
    function hasTaskInFavorites(taskID) {
        return userFavorites.some(item => item.id === taskID)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addItem: addToUserFavorites,
        removeItem: removeTaskInFavorite,
        existItem: hasTaskInFavorites
    }
    return (
        <FavoritesTasksContext.Provider value={ context }>
            {props.children}
        </FavoritesTasksContext.Provider>
    )
}

export default FavoriteTasksProvider
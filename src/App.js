import React, {useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'

export const AppContext = React.createContext()

import Navigator from './navigation/Navigator'

const AppProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)
    const [token, setToken] = useState(null)
    const [news, setNews] = useState(null)

    return (
        <AppContext.Provider
            value={{
                userInfo,
                setUserInfo,
                token,
                setToken,
                news,
                setNews,
            }}>
            {children}
        </AppContext.Provider>
    )
}

const App = () => {
    return (
        <AppProvider>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </AppProvider>
    )
}

export default App

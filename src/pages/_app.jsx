import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import GlobalStyles from '../styles/global-styles'

import LightTheme from '../theme/light-theme'
import DarkTheme from '../theme/dark-theme'

import Store from '../redux/store'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={ Store }>
            <ThemeProvider theme={ LightTheme }>
                <GlobalStyles/>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
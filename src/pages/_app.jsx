import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global-styles'

import LightTheme from '../theme/light-theme'
import DarkTheme from '../theme/dark-theme'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={ LightTheme }>
            <GlobalStyles/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
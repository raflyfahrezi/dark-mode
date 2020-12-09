import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global-styles'

import LightTheme from '../theme/light-theme'
import DarkTheme from '../theme/dark-theme'

const MyApp = ({ Component, pageProps }) => {
    const [ theme, setTheme ] = useState('light')

    const ThemeHandler = e => {
        setTheme(e)
    }

    return (
        <ThemeProvider theme={ theme === 'light' ? LightTheme : DarkTheme }>
            <GlobalStyles/>
            <Component {...pageProps} passThemeToApp={ ThemeHandler } />
        </ThemeProvider>
    )
}

export default MyApp
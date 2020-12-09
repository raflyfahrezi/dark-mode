import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global-styles'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <GlobalStyles/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
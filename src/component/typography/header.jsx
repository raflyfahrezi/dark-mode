import React from 'react'
import styled from 'styled-components'

const Header = styled['h1']`
    color : ${ props => props['theme']['color']['secondary'] };
    transition : 0.5s;
`

const header = ({ children }) => {
    return <Header>{ children }</Header>
}

export default header
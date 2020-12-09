import React from 'react'
import styled from 'styled-components'

const Paragraph = styled['p']`
    color : ${ props => props['theme']['color']['secondary'] };
    transition : 0.5s;
`

const paragraph = ({ children }) => {
    return <Paragraph>{ children }</Paragraph>
}

export default paragraph
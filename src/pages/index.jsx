import React from 'react'
import styled from 'styled-components'

const Container = styled['div']`
    width : 100%;
    height : 100%;

    position : fixed;

    display : grid;
    place-items : center;

    background-color : ${ props => props['theme']['color']['primary'] };
`

const index = () => {
    return (
        <Container>
            <p>Hello World</p>
        </Container>
    )
}

export default index
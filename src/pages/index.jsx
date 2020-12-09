import React from 'react'
import styled from 'styled-components'

import ToggleSwitch from '../component/toggle-switch/toggle-switch'

const Container = styled['div']`
    width : 100%;
    height : 100%;

    position : fixed;

    display : grid;
    place-items : center;

    background-color : ${ props => props['theme']['color']['primary'] };
`

const index = () => {
    const toggleHander = e => {

    }

    return (
        <Container>
            <div>
                <ToggleSwitch toggleHander={ e => toggleHander(e) }/>
            </div>
        </Container>
    )
}

export default index
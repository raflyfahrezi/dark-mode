import React from 'react'
import styled from 'styled-components'

import Paragraph from '../component/typography/paragraph'
import ToggleSwitch from '../component/toggle-switch/toggle-switch'

const Container = styled['div']`
    width : 100%;
    height : 100%;

    position : fixed;

    display : grid;
    place-items : center;

    background-color : ${ props => props['theme']['color']['primary'] };
`

const Content = styled['div']`
    width : 100%;
    max-width : 600px;

    display : grid;
    place-items : center;
    gap : 30px;

    text-align : center;
`

const index = () => {
    const toggleHander = e => {

    }

    return (
        <Container>
            <Content>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum fugit veniam tempora beatae voluptate odit quasi obcaecati omnis in?</Paragraph>
                <ToggleSwitch toggleHander={ e => toggleHander(e) }/>
            </Content>
        </Container>
    )
}

export default index
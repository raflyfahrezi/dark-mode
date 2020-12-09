import React from 'react'
import styled from 'styled-components'

const ToggelSwitch = styled['label']`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`

const Slider = styled['span']`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`

const Checkbox = styled['input']`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${ Slider } {
        background-color: #2196F3;
    }

    &:checked + ${ Slider }:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`

const toggleSwitch = ({ toggleHander }) => {
    return (
        <ToggelSwitch>
            <Checkbox type='checkbox' onChange={ toggleHander }/>
            <Slider/>
        </ToggelSwitch>
    )
}

export default toggleSwitch
import React from 'react'
import "./button.scss"
import { button } from '@/types'

export default function Button(props: button) {
    return (
        <button className='button' type={props.btnType ? props.btnType : 'button'} onClick={props.onClickEvent}>{props.text}</button>
    )
}

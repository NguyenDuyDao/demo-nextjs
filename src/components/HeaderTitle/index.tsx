import React from 'react'
import { headerTitle } from '@/src/types'

export default function HeaderTitle(props: headerTitle) {
    return (
        <h1>{ props.title }</h1>
    )
}

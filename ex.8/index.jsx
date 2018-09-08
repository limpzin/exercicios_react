import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Alves'>
        <Member name='Antonio' />
        <Member name='João' />
        <Member name='Pedro' />
    </Family>
    , document.getElementById('app')
)
import React from 'react'
import Content  from './Content'

export default function Header(props) {
  return (
    <div>
        <h1>Header {props.company}</h1>
        <Content company = {props.company}/>
    </div>
  )
}


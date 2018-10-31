import React from 'react'

const Link = props => {
    return <li><a href={ props.url }>{ props.title }</a></li>
}

export default Link
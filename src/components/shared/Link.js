import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Link = props => {
    return <li className="rowLink"><div><a href={ props.url }>{ props.title }</a></div><div className="rowIcons"><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faEdit}/><FontAwesomeIcon icon={faTrashAlt}/></div></li>
}

export default Link
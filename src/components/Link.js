import React, { Component } from 'react'

class Link extends Component {
    render() {
       return (
           <ul className="detail">
               <li>
                   <h2>Rubik's cube</h2>
                   <div className="list">
                       <ul>
                           <li><a>How to solve the 3x3</a></li>
                           <li><a>Best rubik's cube for collection</a></li>
                           <li><a>How to solve the Megaminx</a></li>
                       </ul>
                   </div>
               </li>
           </ul>
       )
    }
}

export default Link
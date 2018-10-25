import React, { Component } from 'react';

class List extends Component {
    render() {
       return (
           <li className="child">
               <h2>Rubik's Cube</h2>
               <div className="list">
                   <ul>
                       <li><a href="http://www.google.com">How to solve the 3x3</a></li>
                       <li><a href="http://www.google.com">Best rubik's cube for collection</a></li>
                       <li><a href="http://www.google.com">How to solve the Megaminx</a></li>
                   </ul>
               </div>
           </li>
       )
    }
}

export default List
import React, { Component } from 'react';
import Link from "./Link";

class Topic extends Component {
    render() {
       return (
           <li className="child">
               <h2>{this.props.topic.name}</h2>
               <div className="list">
                   <ul>{this.props.topic.links.map((link, index) => <Link key={index} url={link.url} title={link.title}/>) }</ul>
               </div>
           </li>
       )
    }
}

export default Topic
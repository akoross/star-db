import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
   render() {
      return (
         <div className="header d-flex justify-content-between">
            <a href="#">
               <h1 className="fw-bold">Star DB</h1>
            </a>

            <ul className="list-group list-group-horizontal">
               <li className="list-group-item list-group-item-action">
                  Planets
               </li>
               <li className="list-group-item list-group-item-action">
                  Starships
               </li>
               <li className="list-group-item list-group-item-action">
                  People
               </li>
            </ul>
         </div>
      );
   }
}

import React, { Component } from "react";
import "./item-details.css";

export default class ItemDetails extends Component {

   render() {

      return (
         <div className="item-details col-md-7 col-ms-12">
            <ul className="list-group">
               <img
                  src="https://starwars-visualguide.com/assets/img/starships/9.jpg"
                  alt="name"
               />
               <h3>Name</h3>
               <li className="list-group-item">
                  <span>Props: </span>
                  <span></span>
               </li>
               <li className="list-group-item">
                  <span>Props: </span>
                  <span></span>
               </li>
               <li className="list-group-item">
                  <span>Props: </span>
                  <span></span>
               </li>
               <li className="list-group-item">
                  <span>Props: </span>
                  <span></span>
               </li>
            </ul>
         </div>
      );
   }
}

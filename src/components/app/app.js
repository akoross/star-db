import React, { Component } from "react";
import Header from "../header/header";
import ItemDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import RandomPLanet from "../random-planet/random-planet";

export default class App extends Component {
   render() {
      return (
         <div className="app container">
            <Header className="row" />
            <RandomPLanet className="row" />
            <div className="row justify-content-between">
               <ItemList />
               <ItemDetails />
            </div>
         </div>
      );
   }
}

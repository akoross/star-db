import React, { Component } from "react";
import Header from "../header/header";
import ItemDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import RandomPLanet from "../random-planet/random-planet";

export default class App extends Component {
   state = { id: null };

   onItemSelected = (id) => {
      this.setState({
         id,
      });
   };

   render() {
      const { id } = this.state;

      return (
         <div className="app container">
            <Header className="row" />
            <RandomPLanet className="row" />
            <div className="row row-cols-2 row-cols-sm-1">
               <ItemList propsOnItemSelected={this.onItemSelected} />
               <ItemDetails itemId={id} />
            </div>
         </div>
      );
   }
}

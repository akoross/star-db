import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator";
import Header from "../header/header";
import ItemDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import RandomPLanet from "../random-planet/random-planet";

export default class App extends Component {
   state = { id: null, hasError: false };

   onItemSelected = (id) => {
      this.setState({
         id,
      });
   };

   componentDidCatch() {
      this.setState({ hasError: true });
   }

   render() {
      const { id, hasError } = this.state;
      if (hasError) {
         return <ErrorIndicator />;
      }
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

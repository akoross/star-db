import React, { Component } from "react";
import SwapiService from "../../service/swapi-service";
import Spinner from "../spinner/spinner";
import "./item-list.css";

export default class ItemList extends Component {
   swapiService = new SwapiService();

   state = { list: null };

   componentDidMount() {
      this.swapiService.getAllPeople().then((list) => {
         this.setState({ list });
      });
   }

   renderItems(arr) {
      return arr.slice(0, 3).map(({ id, name }) => {
         return (
            <li
               className="list-group-item list-group-item-action"
               key={id}
               onClick={() => this.props.propsOnItemSelected(id)}
            >
               {name}
            </li>
         );
      });
   }

   render() {
      const { list } = this.state;
      if (!list) {
         return <Spinner />;
      }

      const items = this.renderItems(list);

      return (
         <div className="item-list col-md-5">
            <ul className="list-group">{items}</ul>
         </div>
      );
   }
}

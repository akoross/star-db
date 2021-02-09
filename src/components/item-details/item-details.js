import React, { Component } from "react";
import SwapiService from "../../service/swapi-service";
import Spinner from "../spinner/spinner";
import "./item-details.css";

export default class ItemDetails extends Component {
   swapiService = new SwapiService();

   state = {
      data: null,
   };

   componentDidMount() {
      this.updatePerson();
   }

   componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
         this.updatePerson();
      }
   }

   updatePerson() {
      const { itemId } = this.props;
      if (!itemId) {
         return;
      }
      this.swapiService.getPerson(itemId).then((data) => {
         this.setState({ data });
      });
   }

   render() {
      if (!this.state.data) {
         return <span>Select a wont you intereset a list</span>;
      }

      const { id, name, birthYear, gender } = this.state.data;
      if (!this.state.data) {
         <Spinner />;
      }

      return (
         <div className="item-details col-md-7">
            <img
               src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
               alt={name}
            />
            <ul className="list-group">
               <h3>{name}</h3>
               <li className="list-group-item">
                  <span>Birth Year: </span>
                  <span>{birthYear}</span>
               </li>
               <li className="list-group-item">
                  <span>Gender: </span>
                  <span>{gender}</span>
               </li>
            </ul>
         </div>
      );
   }
}

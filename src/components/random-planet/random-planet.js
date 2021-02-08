import React, { Component } from "react";
import SwapiService from "../../service/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";
import "./random-planet.css";

export default class RandomPLanet extends Component {
   swapiService = new SwapiService();

   state = {
      planet: {},
      loading: true,
      error: false,
   };

   componentDidMount() {
      this.updatePlanet();
   }

   onPlanetLoaded = (planet) => {
      this.setState({
         planet,
         loading: false,
      });
   };

   onError = (err) => {
      this.setState({ error: true, loading: false });
   };

   updatePlanet() {
      const id = Math.floor(Math.random() * 10 + 2);
      this.swapiService
         .getPlanet(id)
         .then(this.onPlanetLoaded)
         .catch(this.onError);
   }

   render() {
      const { planet, loading, error } = this.state;

      const hasData = !(loading || error);

      const errorMassage = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = hasData ? <PlanetView planet={planet} /> : null;

      return (
         <div className="random-planet d-flex justify-content-start jumbotron">
            {errorMassage}
            {spinner}
            {content}
         </div>
      );
   }
}

const PlanetView = ({ planet }) => {
   const { id, name, population, rotationPeriod, diameter } = planet;
   return (
      <React.Fragment>
         <img
            className="d-fex"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt={name}
         />
         <ul className="list-group list-group-flush">
            <h3>{name}</h3>
            <li className="list-group-item">
               <span>Populaton: </span>
               <span>{population}</span>
            </li>
            <li className="list-group-item">
               <span>Rotation period: </span>
               <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
               <span>Diameter: </span>
               <span>{diameter}</span>
            </li>
         </ul>
      </React.Fragment>
   );
};

export default class SwapiService {
   _apiBase = "https://swapi.dev/api";

   async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
         throw new Error(`Ould not feth ${url}, received ${res.status}`);
      }
      return await res.json();
   }
   _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
   }

   async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
   }
   async getPerson(id) {
      const person = await this.getResource(`/people/${id}`);
      return this._transformPerson(person);
   }
   _transformPerson(person) {
      return {
         id: this._extractId(person),
         name: person.name,
         birth_year: person.birth_year,
         gender: person.gender,
      };
   }

   async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
   }
   async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}`);
      return this._transformPlanet(planet);
   }
   _transformPlanet(planet) {
      return {
         id: this._extractId(planet),
         name: planet.name,
         rotationPeriod: planet.rotation_period,
         population: planet.population,
         diameter: planet.diameter,
      };
   }

   async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship);
   }
   async getStarship(id) {
      const starship = await this.getResource(`/starships/${id}`);
      return this._transformStarship(starship);
   }
   _transformStarship(starship) {
      return {
         id: this._extractId(starship),
         name: starship.name,
         model: starship.model,
         cost: starship.cost_in_credits,
         passengers: starship.passengers,
      };
   }
}

import {
  Film,
  Films,
  ManySpecies,
  People,
  Person,
  Planet,
  Planets,
  Species,
  Starship,
  Starships,
  Vehicle,
  Vehicles
} from '../models'
import {inject,} from '@loopback/core';
import {SwoopiService} from '../services'
import {MediaTypeObject} from 'openapi3-ts';
import {get, param} from '@loopback/openapi-v3';
import * as d from 'debug';

const log = d('swoopi:controller:swoopi')
// d.enable('swoopi:controller:swoopi')

const one = <T>(type: T): MediaTypeObject => ({schema: {'x-ts-type': type}})

const many = <T>(type: T): MediaTypeObject => ({
  schema: {type: 'object', properties: {results: {'x-ts-type': type}}}
})

const responses = (desc: string, schema: MediaTypeObject) => ({
  responses: {'200': {description: desc, content: {'application/json': schema}}},
})


export class SwoopiController {
  constructor(
      @inject('services.SwoopiService')
      protected service: SwoopiService
  ) {
  }

  /** films */
  @get('films', responses('films', many(Films)))
  async films(
      @param.query.string('search') search?: string,
      @param.query.string('page') page?: string,
  ): Promise<Films> {
    const films = await this.service.models('films', search, page)
    return Films.fix(films)
  }

  @get('films/{id}', responses('film', one(Film)))
  async findFilm(@param.path.string('id') id: string): Promise<Film> {
    const film = await this.service.model('films', id)
    return Film.fix(film)
  }

  /** people */
  @get('people', responses('people', many(People)))
  async people(
      @param.query.string('search') search?: string,
      @param.query.string('page') page?: string,
  ): Promise<People> {
    const people = await this.service.models('people', search, page)
    return People.fix(people)
  }

  @get('people/{id}', responses('person', one(Person)))
  async findPerson(@param.path.string('id') id: string): Promise<Person> {
    const person = await this.service.model('people', id)
    return Person.fix(person)
  }

  /** planets */
  @get('planets', responses('planets', many(Planets)))
  async planets(
      @param.query.string('search') search?: string,
      @param.query.string('page') page?: string,
  ): Promise<Planets> {
    const planets = await this.service.models('planets', search, page)
    return Planets.fix(planets)
  }

  @get('planets/{id}', responses('planet', one(Planet)))
  async findPlanet(@param.path.string('id') id: string): Promise<Planet> {
    const planet = await this.service.model('planets', id)
    return Planet.fix(planet)
  }

  /** many species */
  @get('manySpecies', responses('manySpecies', many(ManySpecies)))
  async manySpecies(
      @param.query.string('search') search?: string,
      @param.query.string('page') page?: string,
  ): Promise<ManySpecies> {
    const manySpecies = await this.service.models('species', search, page)
    return ManySpecies.fix(manySpecies)
  }

  @get('manySpecies/{id}', responses('species', one(Species)))
  async findSpecies(@param.path.string('id') id: string): Promise<Species> {
    const species = await this.service.model('species', id)
    return Species.fix(species)
  }

  /** starships */
  @get('starships', responses('starships', many(Starships)))
  async starships(
      @param.query.string('search') search?: string,
      @param.query.string('page') page?: string,
  ): Promise<Starships> {
    const starships = await this.service.models('starships', search, page)
    return Starships.fix(starships)
  }

  @get('starships/{id}', responses('starship', one(Starship)))
  async findStarship(@param.path.string('id') id: string): Promise<Starship> {
    const starship = await this.service.model('starships', id)
    return Starship.fix(starship)
  }

  /** vehicles */
  @get('vehicles', responses('vehicles', many(Vehicles)))
  async vehicles(
      @param.query.string('search') search?: string,
      @param.query.string('page') page?: string,
  ): Promise<Vehicles> {
    const vehicles = await this.service.models('vehicles', search, page)
    return Vehicles.fix(vehicles)
  }

  @get('vehicles/{id}', responses('vehicle', one(Vehicle)))
  async findVehicle(@param.path.string('id') id: string): Promise<Vehicle> {
    const vehicle = await this.service.model('vehicles', id)
    return Vehicle.fix(vehicle)
  }
}

/*
 * Copyright (c) 2018 Unbearable Professional
 *
 * I dedicate any and all copyright interest in this software to the
 * public domain. I make this dedication for the benefit of the public at
 * large and to the detriment of my heirs and successors. I intend this
 * dedication to be an overt act of relinquishment in perpetuity of all
 * present and future rights to this software under copyright law.
 */

import {model, property} from '@loopback/repository';
import * as d from 'debug';
import {fromNullable} from '../util/monad'

const log = d('swoopi:model:swapi')
// d.enable('swoopi:model:swapi')

const penultimate = (a: string[]): string => a[a.length - 2]

const idOf = (url: string | null): string =>
    fromNullable(url)
        // @ts-ignore
        .map(u => u.split('/'))
        .map(penultimate)
        // @ts-ignore
        .fold(() => 'terminator', id => id)


const pageOf = (url: PagePointer| string | null): PagePointer | string =>
    fromNullable(url)
        // @ts-ignore
        .map(u => new URL(u))
        // @ts-ignore
        .map(u => u.searchParams)
        // @ts-ignore
        .map(params => ({page: params.get('page'), search: params.get('search'),}))
        // @ts-ignore
        .fold(() => 'terminator', id => id)


export type SwapiOne =
    & Film
    & Person
    & Planet
    & Species
    & Starship
    & Vehicle

export type SwapiMany =
    & Films
    & People
    & Planets
    & ManySpecies
    & Starships
    & Vehicles

@model()
class Created {
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  @property() created: Date;

  /**
   * The url of this resource
   */
  @property() url: string;

  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  @property() edited: Date;

  static fix(created: Created): Created {
    return {
      ...created,
      url: idOf(created.url)
    }
  }
}

@model()
class PagePointer {
  @property() page: string;
  @property() search: string;
}

@model()
abstract class Paged {
  @property() next: PagePointer | string | null;
  @property() previous: PagePointer | string | null;
  @property() count: number;

  static fix(paged: Paged): Paged {
    return {
      ...paged,
      next: pageOf(paged.next),
      previous: pageOf(paged.previous),
    }
  }
}

/**
 * A planet.
 */
@model()
export class Planet extends Created {
  /**
   * The number of standard days it takes for this planet to complete a single orbit of its local star.
   */
  @property() orbital_period: string;
  /**
   * An array of People URL Resources that live on this planet.
   */
  @property({itemType: 'string'}) residents: string[];
  /**
   * The average populationof sentient beings inhabiting this planet.
   */
  @property() population: string;
  /**
   * An array of Film URL Resources that this planet has appeared in.
   */
  @property({itemType: 'string'}) films: string[];
  /**
   * The number of standard hours it takes for this planet to complete a single rotation on its axis.
   */
  @property() rotation_period: string;
  /**
   * The percentage of the planet surface that is naturally occuring water or bodies of water.
   */
  @property() surface_water: string;
  /**
   * The climate of this planet. Comma-seperated if diverse.
   */
  @property() climate: string;
  /**
   * The name of this planet.
   */
  @property() name: string;
  /**
   * the terrain of this planet. Comma-seperated if diverse.
   */
  @property() terrain: string;
  /**
   * A number denoting the gravity of this planet. Where 1 is normal.
   */
  @property() gravity: string;
  /**
   * The diameter of this planet in kilometers.
   */
  @property() diameter: string;

  static fix = (planet: Planet): Planet => {
    return {
      ...planet,
      ...Created.fix(planet),
      residents: planet.residents.map(idOf),
      films: planet.films.map(idOf),
    }
  }
}

@model()
export class Planets extends Paged {
  @property({itemType: Planet}) results: Planet[];

  static fix(paged: Planets): Planets {
    return {
      ...paged,
      ...Paged.fix(paged),
      results: paged.results.map(Planet.fix)
    }
  }
}

/**
 * A Starship
 */
@model()
export class Starship extends Created {
  /**
   * An array of People URL Resources that this starship has been piloted by.
   */
  @property({itemType: 'string'}) pilots: string[];
  /**
   * The class of this starships hyperdrive.
   */
  @property() hyperdrive_rating: string;
  /**
   * The cost of this starship new, in galactic credits.
   */
  @property() cost_in_credits: string;
  /**
   * The model or official name of this starship. Such as T-65 X-wing or DS-1 Orbital Battle Station.
   */
  @property() model: string;
  /**
   * The number of non-essential people this starship can transport.
   */
  @property() passengers: string;
  /**
   * The name of this starship. The common name, such as Death Star.
   */
  @property() name: string;
  /**
   * The maximum speed of this starship in atmosphere. n/a if this starship is incapable of atmosphering flight.
   */
  @property() max_atmosphering_speed: string;
  /**
   * The manufacturer of this starship. Comma seperated if more than one.
   */
  @property() manufacturer: string;
  /**
   * An array of Film URL Resources that this starship has appeared in.
   */
  @property({itemType: 'string'}) films: string[];
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour. A Megalight is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
   */
  @property() MGLT: string;
  /**
   * The class of this starship, such as Starfighter or Deep Space Mobile Battlestation.
   */
  @property() starship_class: string;
  /**
   * The number of personnel needed to run or pilot this starship.
   */
  @property() crew: string;
  /**
   * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
   */
  @property() consumables: string;
  /**
   * The length of this starship in meters.
   */
  @property() length: string;
  /**
   * The maximum number of kilograms that this starship can transport.
   */
  @property() cargo_capacity: string;

  static fix = (starship: Starship): Starship => {
    return {
      ...starship,
      ...Created.fix(starship),
      pilots: starship.pilots.map(idOf),
      films: starship.films.map(idOf),
    }
  }
}

@model()
export class Starships extends Paged {
  @property({itemType: Starship}) results: Starship[];

  static fix(paged: Starships): Starships {
    return {
      ...paged,
      ...Paged.fix(paged),
      results: paged.results.map(Starship.fix)
    }
  }
}

/**
 * A vehicle.
 */
@model()
export class Vehicle extends Created {
  /**
   * The class of this vehicle, such as Wheeled.
   */
  @property() vehicle_class: string;
  /**
   * The maximum number of kilograms that this vehicle can transport.
   */
  @property() cargo_capacity: string;
  /**
   * The cost of this vehicle new, in galactic credits.
   */
  @property() cost_in_credits: string;
  /**
   * The model or official name of this vehicle. Such as All Terrain Attack Transport.
   */
  @property() model: string;
  /**
   * The number of non-essential people this vehicle can transport.
   */
  @property() passengers: string;
  /**
   * The name of this vehicle. The common name, such as Sand Crawler.
   */
  @property() name: string;
  /**
   * The maximum speed of this vehicle in atmosphere.
   */
  @property() max_atmosphering_speed: string;
  /**
   * The manufacturer of this vehicle. Comma seperated if more than one.
   */
  @property() manufacturer: string;
  /**
   * An array of Film URL Resources that this vehicle has appeared in.
   */
  @property({itemType: 'string'}) films: string[];
  /**
   * An array of People URL Resources that this vehicle has been piloted by.
   */
  @property({itemType: 'string'}) pilots: string[];
  /**
   * The number of personnel needed to run or pilot this vehicle.
   */
  @property() crew: string;
  /**
   * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
   */
  @property() consumables: string;
  /**
   * The length of this vehicle in meters.
   */
  @property() length: string;

  static fix = (vehicle: Vehicle): Vehicle => {
    return {
      ...vehicle,
      ...Created.fix(vehicle),
      pilots: vehicle.pilots.map(idOf),
      films: vehicle.films.map(idOf),
    }
  }
}

@model()
export class Vehicles extends Paged {
  @property({itemType: Vehicle}) results: Vehicle[];

  static fix(paged: Vehicles): Vehicles {
    return {
      ...paged,
      ...Paged.fix(paged),
      results: paged.results.map(Vehicle.fix)
    }
  }
}

/**
 * A species within the Star Wars universe
 */
@model()
export class Species extends Created {
  /**
   * The average lifespan of this species in years.
   */
  @property() average_lifespan: string;
  /**
   * A comma-seperated string of common eye colors for this species, none if this species does not typically have eyes.
   */
  @property() eye_colors: string;
  /**
   * A comma-seperated string of common hair colors for this species, none if this species does not typically have hair.
   */
  @property() hair_colors: string;
  /**
   * The URL of a planet resource, a planet that this species originates from.
   */
  @property() homeworld: string;
  /**
   * A comma-seperated string of common skin colors for this species, none if this species does not typically have skin.
   */
  @property() skin_colors: string;
  /**
   * The language commonly spoken by this species.
   */
  @property() language: string;
  /**
   * The name of this species.
   */
  @property() name: string;
  /**
   *  An array of Film URL Resources that this species has appeared in.
   */
  @property({itemType: 'string'}) films: string[];
  /**
   * The designation of this species.
   */
  @property() designation: string;
  /**
   * The average height of this person in centimeters.
   */
  @property() average_height: string;
  /**
   * An array of People URL Resources that are a part of this species.
   */
  @property({itemType: 'string'}) people: string[];
  /**
   * The classification of this species.
   */
  @property() classification: string;

  static fix = (species: Species): Species => {
    return {
      ...species,
      ...Created.fix(species),
      people: species.people.map(idOf),
      films: species.films.map(idOf),
      homeworld: idOf(species.homeworld),
    }
  }
}

@model()
export class ManySpecies extends Paged {
  @property({itemType: Species}) results: Species[];

  static fix(paged: ManySpecies): ManySpecies {
    return {
      ...paged,
      ...Paged.fix(paged),
      results: paged.results.map(Species.fix)
    }
  }
}

/**
 * A Star Wars film
 */
@model()
export class Film extends Created {
  /**
   * The species resources featured within this film.
   */
  @property({itemType: 'string'}) species: string[];
  /**
   * The release date at original creator country.
   */
  @property() release_date: string;
  /**
   * The title of this film.
   */
  @property() title: string;
  /**
   * The vehicle resources featured within this film.
   */
  @property({itemType: 'string'}) vehicles: string[];
  /**
   * The people resources featured within this film.
   */
  @property({itemType: 'string'}) characters: string[];
  /**
   * The planet resources featured within this film.
   */
  @property({itemType: 'string'}) planets: string[];
  /**
   * The episode number of this film.
   */
  @property() episode_id: number;
  /**
   * The starship resources featured within this film.
   */
  @property({itemType: 'string'}) starships: string[];
  /**
   * The director of this film.
   */
  @property() director: string;
  /**
   * The opening crawl text at the beginning of this film.
   */
  @property() opening_crawl: string;
  /**
   * The producer(s) of this film.
   */
  @property() producer: string;

  static fix = (film: Film): Film => {
    return {
      ...film,
      ...Created.fix(film),
      species: film.species.map(idOf),
      vehicles: film.vehicles.map(idOf),
      characters: film.characters.map(idOf),
      planets: film.planets.map(idOf),
      starships: film.starships.map(idOf),
    }
  }
}

@model()
export class Films extends Paged {
  @property({itemType: Film}) results: Film[];

  static fix(paged: Films): Films {
    return {
      ...paged,
      ...Paged.fix(paged),
      results: paged.results.map(Film.fix)
    }
  }
}


/**
 * A person within the Star Wars universe
 */
@model()
export class Person extends Created {
  /**
   * The url of the species resource that this person is.
   */
  @property({itemType: 'string'}) species: string[];
  /**
   * An array of vehicle resources that this person has piloted
   */
  @property({itemType: 'string'}) vehicles: string[];
  /**
   * The hair color of this person.
   */
  @property() hair_color: string;
  /**
   * The skin color of this person.
   */
  @property() skin_color: string;
  /**
   * The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).
   */
  @property() birth_year: string;
  /**
   * An array of starship resources that this person has piloted
   */
  @property({itemType: 'string'}) starships: string[];
  /**
   * The name of this person.
   */
  @property() name: string;
  /**
   * The height of this person in meters.
   */
  @property() height: string;
  /**
   * An array of urls of film resources that this person has been in.
   */
  @property({itemType: 'string'}) films: string[];
  /**
   * The mass of this person in kilograms.
   */
  @property() mass: string;
  /**
   * The url of the planet resource that this person was born on.
   */
  @property() homeworld: string;
  /**
   * The gender of this person (if known).
   */
  @property() gender: string;
  /**
   * The eye color of this person.
   */
  @property() eye_color: string;

  static fix = (person: Person): Person => {
    return {
      ...person,
      ...Created.fix(person),
      species: person.species.map(idOf),
      vehicles: person.vehicles.map(idOf),
      starships: person.starships.map(idOf),
      films: person.films.map(idOf),
      homeworld: idOf(person.homeworld)
    }
  }
}

@model()
export class People extends Paged {
  @property({itemType: Person}) results: Person[];

  static fix(paged: People): People {
    return {
      ...paged,
      ...Paged.fix(paged),
      results: paged.results.map(Person.fix)
    }
  }
}

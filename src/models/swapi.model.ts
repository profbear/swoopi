import {model, property} from '@loopback/repository';

//import {AnyObject} from '@loopback/repository';

@model()
export class Paged {
  @property() next: number;
  @property() prev: number;
  @property() count: number;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A planet.
 */
@model()
export class Planet {
  /**
   * The number of standard days it takes for this planet to complete a single orbit of its local star.
   */
  @property() orbital_period: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  @property() created: string;
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
   * The hypermedia URL of this resource.
   */
  @property() url: string;
  /**
   * The name of this planet.
   */
  @property() name: string;
  /**
   * the terrain of this planet. Comma-seperated if diverse.
   */
  @property() terrain: string;
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  @property() edited: string;
  /**
   * A number denoting the gravity of this planet. Where 1 is normal.
   */
  @property() gravity: string;
  /**
   * The diameter of this planet in kilometers.
   */
  @property() diameter: string;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A Starship
 */
@model()
export class Starship {
  /**
   * An array of People URL Resources that this starship has been piloted by.
   */
  @property({itemType: 'string'}) pilots: string[];
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  @property() created: string;
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
   * The hypermedia URL of this resource.
   */
  @property() url: string;
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
   * the ISO 8601 date format of the time that this resource was edited.
   */
  @property() edited: string;
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
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A vehicle.
 */
@model()
export class Vehicle {
  /**
   * The class of this vehicle, such as Wheeled.
   */
  @property() vehicle_class: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  @property() created: string;
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
   * The hypermedia URL of this resource.
   */
  @property() url: string;
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
   * the ISO 8601 date format of the time that this resource was edited.
   */
  @property() edited: string;
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
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A species within the Star Wars universe
 */
@model()
export class Species {
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  @property() created: string;
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
   * The hypermedia URL of this resource.
   */
  @property() url: string;
  /**
   *  An array of Film URL Resources that this species has appeared in.
   */
  @property({itemType: 'string'}) films: string[];
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  @property() edited: string;
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
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A Star Wars film
 */
@model()
export class Film {
  /**
   * The species resources featured within this film.
   */
  @property({itemType: 'string'}) species: string[];
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  @property() created: string;
  /**
   * The url of this resource
   */
  @property() url: string;
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
   * the ISO 8601 date format of the time that this resource was edited.
   */
  @property() edited: string;
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
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A person within the Star Wars universe
 */
@model()
export class Person {
  /**
   * The url of the species resource that this person is.
   */
  @property({itemType: 'string'}) species: string[];
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  @property() created: string;
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
   * The url of this resource
   */
  @property() url: string;
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
   * the ISO 8601 date format of the time that this resource was edited.
   */
  @property() edited: string;
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
}


@model()
export class People extends Paged {
  @property({itemType: Person}) results: Person[];
}

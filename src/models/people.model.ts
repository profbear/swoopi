/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A planet.
 */
export interface Planet {
  /**
   * The number of standard days it takes for this planet to complete a single orbit of its local star.
   */
  orbital_period: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * An array of People URL Resources that live on this planet.
   */
  residents: string[];
  /**
   * The average populationof sentient beings inhabiting this planet.
   */
  population: string;
  /**
   * An array of Film URL Resources that this planet has appeared in.
   */
  films: string[];
  /**
   * The number of standard hours it takes for this planet to complete a single rotation on its axis.
   */
  rotation_period: string;
  /**
   * The percentage of the planet surface that is naturally occuring water or bodies of water.
   */
  surface_water: string;
  /**
   * The climate of this planet. Comma-seperated if diverse.
   */
  climate: string;
  /**
   * The hypermedia URL of this resource.
   */
  url: string;
  /**
   * The name of this planet.
   */
  name: string;
  /**
   * the terrain of this planet. Comma-seperated if diverse.
   */
  terrain: string;
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * A number denoting the gravity of this planet. Where 1 is normal.
   */
  gravity: string;
  /**
   * The diameter of this planet in kilometers.
   */
  diameter: string;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A Starship
 */
export interface Starship {
  /**
   * An array of People URL Resources that this starship has been piloted by.
   */
  pilots: string[];
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * The class of this starships hyperdrive.
   */
  hyperdrive_rating: string;
  /**
   * The cost of this starship new, in galactic credits.
   */
  cost_in_credits: string;
  /**
   * The model or official name of this starship. Such as T-65 X-wing or DS-1 Orbital Battle Station.
   */
  model: string;
  /**
   * The number of non-essential people this starship can transport.
   */
  passengers: string;
  /**
   * The hypermedia URL of this resource.
   */
  url: string;
  /**
   * The name of this starship. The common name, such as Death Star.
   */
  name: string;
  /**
   * The maximum speed of this starship in atmosphere. n/a if this starship is incapable of atmosphering flight.
   */
  max_atmosphering_speed: string;
  /**
   * The manufacturer of this starship. Comma seperated if more than one.
   */
  manufacturer: string;
  /**
   * An array of Film URL Resources that this starship has appeared in.
   */
  films: string[];
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour. A Megalight is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
   */
  MGLT: string;
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The class of this starship, such as Starfighter or Deep Space Mobile Battlestation.
   */
  starship_class: string;
  /**
   * The number of personnel needed to run or pilot this starship.
   */
  crew: string;
  /**
   * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
   */
  consumables: string;
  /**
   * The length of this starship in meters.
   */
  length: string;
  /**
   * The maximum number of kilograms that this starship can transport.
   */
  cargo_capacity: string;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A vehicle.
 */
export interface Starship {
  /**
   * The class of this vehicle, such as Wheeled.
   */
  vehicle_class: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * The maximum number of kilograms that this vehicle can transport.
   */
  cargo_capacity: string;
  /**
   * The cost of this vehicle new, in galactic credits.
   */
  cost_in_credits: string;
  /**
   * The model or official name of this vehicle. Such as All Terrain Attack Transport.
   */
  model: string;
  /**
   * The number of non-essential people this vehicle can transport.
   */
  passengers: string;
  /**
   * The hypermedia URL of this resource.
   */
  url: string;
  /**
   * The name of this vehicle. The common name, such as Sand Crawler.
   */
  name: string;
  /**
   * The maximum speed of this vehicle in atmosphere.
   */
  max_atmosphering_speed: string;
  /**
   * The manufacturer of this vehicle. Comma seperated if more than one.
   */
  manufacturer: string;
  /**
   * An array of Film URL Resources that this vehicle has appeared in.
   */
  films: string[];
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * An array of People URL Resources that this vehicle has been piloted by.
   */
  pilots: string[];
  /**
   * The number of personnel needed to run or pilot this vehicle.
   */
  crew: string;
  /**
   * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
   */
  consumables: string;
  /**
   * The length of this vehicle in meters.
   */
  length: string;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A species within the Star Wars universe
 */
export interface People {
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * The average lifespan of this species in years.
   */
  average_lifespan: string;
  /**
   * A comma-seperated string of common eye colors for this species, none if this species does not typically have eyes.
   */
  eye_colors: string;
  /**
   * A comma-seperated string of common hair colors for this species, none if this species does not typically have hair.
   */
  hair_colors: string;
  /**
   * The URL of a planet resource, a planet that this species originates from.
   */
  homeworld: string;
  /**
   * A comma-seperated string of common skin colors for this species, none if this species does not typically have skin.
   */
  skin_colors: string;
  /**
   * The language commonly spoken by this species.
   */
  language: string;
  /**
   * The name of this species.
   */
  name: string;
  /**
   * The hypermedia URL of this resource.
   */
  url: string;
  /**
   *  An array of Film URL Resources that this species has appeared in.
   */
  films: string[];
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The designation of this species.
   */
  designation: string;
  /**
   * The average height of this person in centimeters.
   */
  average_height: string;
  /**
   * An array of People URL Resources that are a part of this species.
   */
  people: string[];
  /**
   * The classification of this species.
   */
  classification: string;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A Star Wars film
 */
export interface Film {
  /**
   * The species resources featured within this film.
   */
  species: string[];
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * The url of this resource
   */
  url: string;
  /**
   * The release date at original creator country.
   */
  release_date: string;
  /**
   * The title of this film.
   */
  title: string;
  /**
   * The vehicle resources featured within this film.
   */
  vehicles: string[];
  /**
   * The people resources featured within this film.
   */
  characters: string[];
  /**
   * The planet resources featured within this film.
   */
  planets: string[];
  /**
   * The episode number of this film.
   */
  episode_id: number;
  /**
   * The starship resources featured within this film.
   */
  starships: string[];
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The director of this film.
   */
  director: string;
  /**
   * The opening crawl text at the beginning of this film.
   */
  opening_crawl: string;
  /**
   * The producer(s) of this film.
   */
  producer: string;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A person within the Star Wars universe
 */
export interface People {
  /**
   * The url of the species resource that this person is.
   */
  species: string[];
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * An array of vehicle resources that this person has piloted
   */
  vehicles: string[];
  /**
   * The hair color of this person.
   */
  hair_color: string;
  /**
   * The skin color of this person.
   */
  skin_color: string;
  /**
   * The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).
   */
  birth_year: string;
  /**
   * An array of starship resources that this person has piloted
   */
  starships: string[];
  /**
   * The name of this person.
   */
  name: string;
  /**
   * The url of this resource
   */
  url: string;
  /**
   * The height of this person in meters.
   */
  height: string;
  /**
   * An array of urls of film resources that this person has been in.
   */
  films: string[];
  /**
   * The mass of this person in kilograms.
   */
  mass: string;
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The url of the planet resource that this person was born on.
   */
  homeworld: string;
  /**
   * The gender of this person (if known).
   */
  gender: string;
  /**
   * The eye color of this person.
   */
  eye_color: string;
}

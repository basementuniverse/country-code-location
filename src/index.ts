import * as countries from '../data/countries.json';

export type Country = {
  country: string,
  code: string,
  lat: number,
  long: number
};

/**
 * Calculate the haversine distance between 2 points
 * @param {number} aLat
 * @param {number} aLong
 * @param {number} bLat
 * @param {number} bLong
 * @returns {number}
 */
function haversine(
  aLat: number,
  aLong: number,
  bLat: number,
  bLong: number
): number {
  const toRadians = (theta: number): number => (Math.PI / 180) * theta;
  const distance = (a: number, b: number): number => (Math.PI / 180) * (a - b);
  const a =
    Math.pow(Math.sin(distance(bLat, aLat) / 2), 2) +
    Math.pow(Math.sin(distance(bLong, aLong) / 2), 2) *
    Math.cos(toRadians(aLat)) * Math.cos(toRadians(bLat));
  return 2 * Math.asin(Math.sqrt(a));
}

/**
 * Convert a country code into a location
 * @param {string} countryCode The country code to search for
 * @returns {Country|undefined} An object containing the country code, name, latitude and
 * longitude or undefined if no country was found with the specified code
 */
export function countryCodeToLocation(countryCode: string): Country | undefined {
  return countries.find(country => country.code.localeCompare(countryCode, 'en', {
    sensitivity: 'base'
  }) === 0);
}

/**
 * Convert a location into a country
 * @param {number} lat
 * @param {number} long
 * @returns {Country} An object containing the closest country's code, name, latitude and longitude
 */
export function locationToCountryCode(lat: number, long: number): Country {
  const distances = countries.map(country => ({
    distance: haversine(lat, long, country.lat, country.long),
    country,
  }));
  return distances.reduce(
    (previous, current) => previous.distance < current.distance ? previous : current
  ).country;
}

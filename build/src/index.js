"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationToCountryCode = exports.countryCodeToLocation = void 0;
const countries = require("../data/countries.json");
function haversine(aLat, aLong, bLat, bLong) {
    const toRadians = (theta) => (Math.PI / 180) * theta;
    const distance = (a, b) => (Math.PI / 180) * (a - b);
    const a = Math.pow(Math.sin(distance(bLat, aLat) / 2), 2) +
        Math.pow(Math.sin(distance(bLong, aLong) / 2), 2) *
            Math.cos(toRadians(aLat)) * Math.cos(toRadians(bLat));
    return 2 * Math.asin(Math.sqrt(a));
}
function countryCodeToLocation(countryCode) {
    return countries.find(country => country.code.localeCompare(countryCode, 'en', {
        sensitivity: 'base'
    }) === 0);
}
exports.countryCodeToLocation = countryCodeToLocation;
function locationToCountryCode(lat, long) {
    const distances = countries.map(country => ({
        distance: haversine(lat, long, country.lat, country.long),
        country,
    }));
    return distances.reduce((previous, current) => previous.distance < current.distance ? previous : current).country;
}
exports.locationToCountryCode = locationToCountryCode;

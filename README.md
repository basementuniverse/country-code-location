# Country Code Locations

Convert country codes into locations, or locations into the closest country code.

Country codes are ISO 3166-1 alpha-2 (2 digit) country codes.

Locations are defined using latitude and longitude and represent a roughly-central location for each country.

## Installation

```
npm install @basementuniverse/country-code-location
```

## How to use

Import the package:
```typescript
import {
  countryCodeToLocation,
  locationToCountryCode
} from '@basementuniverse/country-code-location';
```

Convert a country code into a location:
```typescript
const australiaLocation = countryCodeToLocation('AU');
/*
{
  "country": "Australia",
  "code": "AU",
  "lat": -27,
  "long": 133
}
*/
```

Find the country closest to a location:
```typescript
const closestToLocation = locationToCountryCode(47, -1);
/*
{
  "country": "France",
  "code": "FR",
  "lat": 46,
  "long": 2
}
*/
```

import { Country, countryCodeToLocation, locationToCountryCode } from './index';

test('countryCodeToLocation returns country data', () => {
  const result = countryCodeToLocation('GB');
  expect(result).toBeInstanceOf(Object);
  expect(result).toHaveProperty('lat');
  expect(result).toHaveProperty('long');
  expect(result).toHaveProperty('country');
  expect(result).toHaveProperty('code');
  expect(typeof result.lat).toBe('number');
  expect(typeof result.long).toBe('number');
  expect(typeof result.country).toBe('string');
  expect(typeof result.code).toBe('string');
});

test('countryCodeToLocation returns the correct data', () => {
  const result = countryCodeToLocation('ZW');
  expect(result).toMatchObject<Country>({
    country: 'Zimbabwe',
    code: 'ZW',
    lat: -20,
    long: 30
  });
})

test('countryCodeToLocation returns undefined for unknown country code', () => {
  const result = countryCodeToLocation('XX');
  expect(result).toBeUndefined();
});

test('locationToCountryCode returns country data', () => {
  const result = locationToCountryCode(-19, 174);
  expect(result).toBeInstanceOf(Object);
  expect(result).toHaveProperty('lat');
  expect(result).toHaveProperty('long');
  expect(result).toHaveProperty('country');
  expect(result).toHaveProperty('code');
  expect(typeof result.lat).toBe('number');
  expect(typeof result.long).toBe('number');
  expect(typeof result.country).toBe('string');
  expect(typeof result.code).toBe('string');
});

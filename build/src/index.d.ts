export declare type Country = {
    country: string;
    code: string;
    lat: number;
    long: number;
};
export declare function countryCodeToLocation(countryCode: string): Country | undefined;
export declare function locationToCountryCode(lat: number, long: number): Country;

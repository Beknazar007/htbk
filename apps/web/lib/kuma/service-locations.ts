export type ServiceCityId = "bishkek" | "osh" | "jalal-abad" | "karakol";

export interface ServiceLocation {
  id: ServiceCityId;
  nameKey: string;
  addressKey: string;
  city: string;
  lat: number;
  lng: number;
  isMain?: boolean;
}

export const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    id: "bishkek",
    nameKey: "cityBishkek",
    addressKey: "serviceAddrBishkek",
    city: "bishkek",
    lat: 42.8746,
    lng: 74.6044,
    isMain: true,
  },
  {
    id: "karakol",
    nameKey: "cityKarakol",
    addressKey: "serviceAddrKarakol",
    city: "karakol",
    lat: 42.4907,
    lng: 78.393,
  },
  {
    id: "jalal-abad",
    nameKey: "cityJalalAbad",
    addressKey: "serviceAddrJalalAbad",
    city: "jalalabad",
    lat: 40.9333,
    lng: 73.001,
  },
  {
    id: "osh",
    nameKey: "cityOsh",
    addressKey: "serviceAddrOsh",
    city: "osh",
    lat: 40.5283,
    lng: 72.7985,
  },
];

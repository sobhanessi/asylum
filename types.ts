import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Main: {
    screen: string;
    filter: filterPage;
  };
  Home: {
    filter: filterPage;
  };
  Login: undefined;
  NGO: { item: ngo };
  Filter: undefined;
  StartupPage: undefined;
  SelectCountryPage: {
    language: string;
  };
  SelectCityPage: {
    language: string;
    country: string;
  };
  LookingFor: {
    language: string;
    country: string;
    city: string;
  };
};

// for ngo
export type ngo = {
  _id: string;
  type: string;
  name: string;
  logo: ImageSourcePropType;
  services: services[];
  languageCourses?: languageCourses[];
  information: string;
  address: address;
  telephones?: telephones[];
  openingHours: openingHours[];
};

type address = {
  city: string;
  state: string;
  address: string;
};

type languageCourses = {
  level?: string;
  information: string;
  teacher: string;
  hours: openingHours;
  logo: string;
};

export type openingHours = {
  day: string;
  hours: string;
};

type telephones = {
  means: string;
  number: string;
};

export type services = {
  service: string;
  languages: string[];
  information: string;
  serviceLogo?: ImageSourcePropType;
  responsiblePerson?: string;
};

export type filterPage = {
  name: string;
  // counselor: boolean;
  lawyer: boolean;
  location: string;
  psychologist: boolean;
  socialWorker: boolean;
  interpreter: boolean;
  doctor: boolean;
  vocationalTraining: boolean;
  languageCourses: boolean;
  sports: boolean;
};

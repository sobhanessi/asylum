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
};

// for ngo
export interface ngo {
  _id: string;
  name: string;
  logo: string;
  services: services[];
  information: string;
  address: address;
  telephones?: telephones[];
  openingHours: openingHours[];
}

type address = {
  city: string;
  state: string;
  address: string;
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
  serviceLogo?: string;
};

export type filterPage = {
  name: string;
  counselor: boolean;
  lawyer: boolean;
  location: string;
  psychologist: boolean;
  socialWorker: boolean;
};

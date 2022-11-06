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

export interface ngo {
  _id: string;
  name: string;
  logo: string;
  services: string[];
  information: string;
  address: address;
  telephones?: string[];
}

type address = {
  city: string;
  state: string;
  address: string;
};
export interface filterPage {
  name: string;
  counselor: boolean;
  lawyer: boolean;
  location: string;
  psychologist: boolean;
  socialWorker: boolean;
}

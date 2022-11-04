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
  information?: string;
  address?: string;
  telephones?: string[];
}

export interface filterPage {
  name: string;
  counselor: boolean;
  lawyer: boolean;
  location: string;
  psychologist: boolean;
  socialWorker: boolean;
}

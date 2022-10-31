export type RootStackParamList = {
  Home: {
    filter: filter;
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

export interface filter {
  name: string;
  counselor: boolean;
  lawyer: boolean;
  psychologist: boolean;
  socialWorker: boolean;
}

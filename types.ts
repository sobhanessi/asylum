export type RootStackParamList = {
  Home: undefined;
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

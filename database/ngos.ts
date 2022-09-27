interface ngos {
  name: string;
  logo: string;
  services: object;
  information: string;
  address: string;
  telephones?: object;
}

export const ngos: [ngos] = [
  {
    name: "",
    logo: "",
    services: [],
    information: "",
    address: "",
    telephones: [],
  },
];

interface ngos {
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

const ngos: ngos[] = [
  {
    _id: "1",
    name: "UNHCR 1",
    logo: "logo.png",
    services: ["Psycho social", "Sports", "Lawyer"],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: ["004915123516042"],
  },
  {
    _id: "2",
    name: "UNHCR 2",
    logo: "logo.png",
    services: ["Psycho social", "Sports", "Lawyer"],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: ["004915123516042"],
  },
  {
    _id: "3",
    name: "UNHCR 3",
    logo: "logo.png",
    services: ["Psycho social", "Sports", "Lawyer"],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: ["004915123516042"],
  },
  {
    _id: "4",
    name: "UNHCR 4",
    logo: "logo.png",
    services: ["Psycho social", "Sports", "Lawyer"],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: ["004915123516042"],
  },
  {
    _id: "5",
    name: "UNHCR 5",
    logo: "logo.png",
    services: ["Psycho social", "Sports", "Lawyer"],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: ["004915123516042"],
  },
  {
    _id: "6",
    name: "UNHCR 6",
    logo: "logo.png",
    services: ["Psycho social", "Sports", "Lawyer"],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: ["004915123516042"],
  },
  {
    _id: "7",
    name: "UNHCR 7",
    logo: "logo.png",
    services: ["Psycho social", "Sports", "Lawyer"],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: ["004915123516042"],
  },
];

export default ngos;

import { ngo } from "../types";

const ngos: ngo[] = [
  {
    _id: "1",
    type: "NGO",
    name: "UNHCR 1",
    logo: require("../assets/unhcr.png"),
    services: [
      {
        service: "Psychologist",
        languages: ["Farsi", "English"],
        information: "blah blah blah blah blah",
        serviceLogo: require("../assets/psychologist.jpg"),
      },
      {
        service: "Lawyer",
        languages: ["Farsi", "English"],
        information: "blah blah blah blah blah",
        serviceLogo: require("../assets/lawyer.jpg"),
      },
    ],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: [{ means: "whatsapp", number: "4915123516042" }],
    openingHours: [
      { day: "Monday", hours: "9 - 17" },
      { day: "Tuesday", hours: "9 - 17" },
      { day: "Wednesday", hours: "9 - 17" },
      { day: "Thursday", hours: "closed!" },
      { day: "Friday", hours: "10-17" },
    ],
  },
  {
    _id: "2",
    name: "UNHCR 2",
    type: "NGO",
    logo: require("../assets/unhcr.png"),
    services: [
      {
        service: "Psychologist",
        languages: ["Farsi", "English"],
        information: "blah blah blah blah blah blah",
        serviceLogo: require("../assets/psychologist.jpg"),
      },
    ],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: [{ means: "whatsapp", number: "4915123516042" }],
    openingHours: [{ day: "Montag", hours: "9 - 17" }],
  },
  {
    _id: "3",
    type: "NGO",
    name: "UNHCR 3",
    logo: require("../assets/unhcr.png"),
    services: [
      {
        service: "Psychologist",
        languages: ["Farsi", "English"],
        information: "blah blah blah blah blah blah",
        serviceLogo: require("../assets/psychologist.jpg"),
      },
    ],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: [{ means: "whatsapp", number: "4915123516042" }],
    openingHours: [{ day: "Montag", hours: "9 - 17" }],
  },
  {
    _id: "4",
    type: "NGO",
    name: "UNHCR 4",
    logo: require("../assets/unhcr.png"),
    services: [
      {
        service: "Psychologist",
        languages: ["Farsi", "English"],
        information: "blah blah blah blah blah blah",
        serviceLogo: require("../assets/psychologist.jpg"),
      },
    ],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: [{ means: "whatsapp", number: "4915123516042" }],
    openingHours: [{ day: "Montag", hours: "9 - 17" }],
  },
  {
    _id: "5",
    type: "NGO",
    name: "UNHCR 5",
    logo: require("../assets/unhcr.png"),
    services: [
      {
        service: "Psychologist",
        languages: ["Farsi", "English"],
        information: "blah blah blah blah blah blah",
        serviceLogo: require("../assets/psychologist.jpg"),
      },
    ],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: [{ means: "whatsapp", number: "4915123516042" }],
    openingHours: [{ day: "Montag", hours: "9 - 17" }],
  },
  {
    _id: "6",
    type: "NGO",
    name: "UNHCR 6",
    logo: require("../assets/unhcr.png"),
    services: [
      {
        service: "Psychologist",
        languages: ["Farsi", "English"],
        information: "blah blah blah blah blah blah",
        serviceLogo: require("../assets/psychologist.jpg"),
      },
    ],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: [{ means: "whatsapp", number: "4915123516042" }],
    openingHours: [{ day: "Montag", hours: "9 - 17" }],
  },
  {
    _id: "7",
    type: "NGO",
    name: "UNHCR 7",
    logo: require("../assets/unhcr.png"),
    services: [
      {
        service: "Lawyer",
        languages: ["Farsi", "English"],
        information: "blah blah blah blah blah blah",
        serviceLogo: require("../assets/lawyer.jpg"),
      },
    ],
    information:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    address: {
      city: "Mönchengladbach",
      state: "Nord-Rhein Westfalen",
      address: "41179, EAE JHQ",
    },
    telephones: [{ means: "whatsapp", number: "4915123516042" }],
    openingHours: [{ day: "Montag", hours: "9 - 17" }],
  },
];

export default ngos;

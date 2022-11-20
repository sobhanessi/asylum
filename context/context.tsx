import * as React from "react";
// import { filterPage } from "../types";

type app = {
  searchQuery: string;
  selectCounselor: boolean;
  selectLawyer: boolean;
  selectCity: string;
  selectPsychologist: boolean;
  selectSocialWorker: boolean;
  onChangeSearch: (q: string) => void;
  setSelectCounselor: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectLawyer: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectCity: React.Dispatch<React.SetStateAction<string>>;
  setSelectPsychologist: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectSocialWorker: React.Dispatch<React.SetStateAction<boolean>>;
  // onValueChange: (i: string, n?: number) => void;
  selectLanguage: string;
  setSelectLanguage: React.Dispatch<React.SetStateAction<string>>;
  selectCountry: string;
  setSelectCountry: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = React.createContext<app>({
  searchQuery: "",
  selectCounselor: false,
  selectLawyer: false,
  selectCity: "",
  selectPsychologist: false,
  selectSocialWorker: false,
  onChangeSearch: () => {},
  setSelectCounselor: () => {},
  setSelectLawyer: () => {},
  setSelectCity: () => {},
  setSelectPsychologist: () => {},
  setSelectSocialWorker: () => {},
  // onValueChange: () => {},
  selectLanguage: "",
  setSelectLanguage: () => {},
  selectCountry: "",
  setSelectCountry: () => {},
});

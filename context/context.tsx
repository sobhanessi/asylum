import * as React from "react";
// import { filterPage } from "../types";

type app = {
  selectCity: string;
  selectCountry: string;
  selectLanguage: string;
  selectLawyer: boolean;
  searchQuery: string;
  // selectCounselor: boolean;
  selectPsychologist: boolean;
  selectSocialWorker: boolean;
  selectVocationalTraining: boolean;
  selectInterpreter: boolean;
  selectDoctor: boolean;
  selectLanguageCourses: boolean;
  selectSports: boolean;
  onChangeSearch: (q: string) => void;
  // setSelectCounselor: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectLawyer: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectCity: React.Dispatch<React.SetStateAction<string>>;
  setSelectPsychologist: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectSocialWorker: React.Dispatch<React.SetStateAction<boolean>>;
  // onValueChange: (i: string, n?: number) => void;
  setSelectLanguage: React.Dispatch<React.SetStateAction<string>>;
  setSelectCountry: React.Dispatch<React.SetStateAction<string>>;
  setSelectVocationalTraining: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectInterpreter: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectDoctor: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectLanguageCourses: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectSports: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<app>({
  searchQuery: "",
  // selectCounselor: false,
  selectLawyer: false,
  selectCity: "",
  selectPsychologist: false,
  selectSocialWorker: false,
  onChangeSearch: () => {},
  // setSelectCounselor: () => {},
  setSelectLawyer: () => {},
  setSelectCity: () => {},
  setSelectPsychologist: () => {},
  setSelectSocialWorker: () => {},
  // onValueChange: () => {},
  selectLanguage: "",
  setSelectLanguage: () => {},
  selectCountry: "",
  setSelectCountry: () => {},
  selectVocationalTraining: false,
  setSelectVocationalTraining: () => {},
  selectInterpreter: false,
  setSelectInterpreter: () => {},
  selectDoctor: false,
  setSelectDoctor: () => {},
  selectLanguageCourses: false,
  setSelectLanguageCourses: () => {},
  selectSports: false,
  setSelectSports: () => {},
});

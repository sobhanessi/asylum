import * as React from "react";
// import { filterPage } from "../types";

interface filterPage {
  searchQuery: string;
  selectCounselor: boolean;
  selectLawyer: boolean;
  selectLocation: string;
  selectPsychologist: boolean;
  selectSocialWorker: boolean;
  onChangeSearch: (q: string) => void;
  setSelectCounselor: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectLawyer: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectLocation: React.Dispatch<React.SetStateAction<string>>;
  setSelectPsychologist: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectSocialWorker: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterPageContext = React.createContext<filterPage>({
  searchQuery: "",
  selectCounselor: false,
  selectLawyer: false,
  selectLocation: "",
  selectPsychologist: false,
  selectSocialWorker: false,
  onChangeSearch: () => {},
  setSelectCounselor: () => {},
  setSelectLawyer: () => {},
  setSelectLocation: () => {},
  setSelectPsychologist: () => {},
  setSelectSocialWorker: () => {},
});

import React from "react";

export default function AppState() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const [selectPsychologist, setSelectPsychologist] = React.useState(false);
  const [selectSocialWorker, setSelectSocialWorker] = React.useState(false);
  const [selectLawyer, setSelectLawyer] = React.useState(false);
  const [selectCounselor, setSelectCounselor] = React.useState(false);
  // const [selectLocation, setSelectLocation] = React.useState("");
  const [selectCity, setSelectCity] = React.useState("");

  const [selectLanguage, setSelectLanguage] = React.useState("");

  const [selectCountry, setSelectCountry] = React.useState("");

  return {
    searchQuery,
    onChangeSearch,
    selectPsychologist,
    setSelectPsychologist,
    selectSocialWorker,
    setSelectSocialWorker,
    selectLawyer,
    setSelectLawyer,
    selectCounselor,
    setSelectCounselor,
    // selectLocation,
    // setSelectLocation,
    selectCity,
    setSelectCity,
    selectLanguage,
    setSelectLanguage,
    selectCountry,
    setSelectCountry,
  };
}

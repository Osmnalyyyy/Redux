import React from "react";
import { Provider, useSelector } from "react-redux";
import DarkModeSwitcher from "./components/dark-mode-switcher/DarkModeSwitcher";
import LangSwitcher from "./components/lang-switcher/LangSwitcher";
import store from "./store";
import "./App.css";
import { $t } from "./helpers/locale-helper";
const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  // tüm App'i re-render etmek için yazdık aslında burada current langa ihtiyacımız yok merkezi
  // statedeki lang değişince useSelectorden dolayı App componenti re-render ediyor
  const currentLang = useSelector((state) => state.locale.lang);

  return (
    <div className={darkMode == true ? "dark" : ""}>
      <DarkModeSwitcher />
      <LangSwitcher />

      <h1>{$t("hello-world")}</h1>
    </div>
  );
};

export default App;

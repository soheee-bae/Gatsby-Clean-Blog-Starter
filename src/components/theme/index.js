import React, { useEffect, useState } from "react";
import { THEME } from "../../constants";
import { getTheme, setTheme } from "../../utils";
import { setDarkTheme, setLightTheme } from "../../utils/theme";

import LightOn from "../../../assets/icons/lightOn";
import LightOff from "../../../assets/icons/lightOff";

import "./index.scss";

const Theme = () => {
  const [checked, setChecked] = useState(true);

  const getNewTheme = (checked) => {
    return checked ? THEME.LIGHT : THEME.DARK;
  };

  const handleSwitch = (checked) => {
    const newTheme = getNewTheme(checked);
    setTheme(newTheme);
    setChecked(checked);

    if (checked) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  useEffect(() => {
    const defaultTheme = getTheme(THEME.LIGHT);
    const checked = defaultTheme === THEME.LIGHT;
    setChecked(checked);
    handleSwitch(checked);
  }, []);

  return (
    <div className="theme">
      <button
        className="themeSwitch"
        data-light={checked}
        onClick={() => handleSwitch(!checked)}
      >
        {checked ? <LightOn /> : <LightOff />}
      </button>
    </div>
  );
};

export default Theme;

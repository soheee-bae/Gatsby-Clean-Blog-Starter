import React, { useEffect, useState } from "react";
import { THEME } from "../../constants";
import { getTheme, setTheme } from "../../utils";
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
  };

  useEffect(() => {
    const defaultTheme = getTheme(THEME.LIGHT);
    const checked = defaultTheme === THEME.LIGHT;
    handleSwitch(checked);
  }, []);

  return (
    <div className="theme">
      <button className="themeSwitch" onClick={() => handleSwitch(!checked)}>
        {checked ? <LightOn /> : <LightOff />}
      </button>
    </div>
  );
};

export default Theme;

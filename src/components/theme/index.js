import React, { useEffect, useState } from "react";
import { LightOff, LightOn } from "../../../assets/icons";
import { THEME } from "../../constants";
import { getTheme, setTheme } from "../../utils";

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
    <div>
      <button onClick={() => handleSwitch(!checked)}>Btn</button>Button
    </div>
  );
};

export default Theme;

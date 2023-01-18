import { LightOn } from "../../../assets/icons/lightOn";
import { LightOff } from "../../../assets/icons/LightOff";

const LIGHT = "light";
const DARK = "dark";

function getTheme(lightOn) {
  return lightOn ? LIGHT : DARK;
}

const Theme = () => {
  const [lightOn, setLightOn] = useState(false);

  const handleClick = () => {
    const theme = getTheme(lightOn);

    setLightOn(!lightOn);
  };

  return <div onClick={handleClick}>{light ? <LightOn /> : <LightOff />}</div>;
};

export default Theme;

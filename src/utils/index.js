import { STORAGE } from "../constants/storage";
import { getFromLocal, setToLocal } from "./storage";

export function getTheme(initialValue) {
  return getFromLocal(`${STORAGE.LOCAL_STORAGE_KEY}/theme`) || initialValue;
}

export function setTheme(themeValue) {
  return setToLocal(`${STORAGE.LOCAL_STORAGE_KEY}/theme`, themeValue);
}

export const isBrowser = () => typeof window !== "undefined";

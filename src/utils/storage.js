import { isBrowser } from ".";

function isEmpty(storage) {
  return !storage || storage === {};
}

export function getValueFrom(storage, key) {
  if (isEmpty(storage)) {
    return;
  }
  const rawData = storage.getItem(key);

  if (!rawData) {
    return;
  }
  return JSON.parse(rawData);
}

export function setValueTo(storage, key, data) {
  if (isEmpty(storage)) {
    return;
  }
  return storage.setItem(key, JSON.stringify(data));
}

export const getFromLocal = (key) => {
  if (isBrowser) {
    const localStorage = window.localStorage;
    return getValueFrom(localStorage, key);
  }
};

export const setToLocal = (key, value) => {
  if (isBrowser) {
    const localStorage = window.localStorage;
    return setValueTo(localStorage, key, value);
  }
};

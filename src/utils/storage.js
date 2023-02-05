const localStorage = window.localStorage;

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
  return getValueFrom(localStorage, key);
};

export const setToLocal = (key, value) => {
  return setValueTo(localStorage, key, value);
};

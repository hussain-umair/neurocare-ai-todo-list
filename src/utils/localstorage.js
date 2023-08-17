const localStorageCache = {}
export const localStorage = {
  set: (key, value) => {
    localStorageCache[key] = value
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get: key =>
    localStorageCache[key] || JSON.parse(window.localStorage.getItem(key)),
}

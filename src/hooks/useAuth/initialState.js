export const initialState = {
  isAuthenticated: false,
  token: undefined,
  email: undefined,
  name: undefined,
}

export const initialStateStored = {
  isAuthenticated: Boolean(localStorage.getItem('@lit:token')),
  token: localStorage.getItem('@lit:token'),
  email: localStorage.getItem('@lit:email'),
}

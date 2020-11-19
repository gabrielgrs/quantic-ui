import { useLayout } from '../useLayout'

function useStorage({ type } = { type: 'local' }) {
  const storage = type === 'local' ? localStorage : sessionStorage

  const { appName } = useLayout()
  const KEY_PREFIX = `@${appName}`

  const setItem = (key, value) => localStorage.setItem(`${KEY_PREFIX}:${key}`, value)

  const getItem = (key) => storage.getItem(`${KEY_PREFIX}:${key}`)

  const clearItem = (key) => storage.removeItem(`${KEY_PREFIX}:${key}`)

  const clearStorage = () => storage.clear()

  return {
    setItem,
    getItem,
    clearItem,
    clearStorage,
  }
}

export default useStorage

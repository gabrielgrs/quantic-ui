const DEFAULT_TRANSITION = 'ease-in-out'

const createTransition = (element, type = DEFAULT_TRANSITION) => `${element} 400ms ${type}`

export default (element, type) => {
  if (Array.isArray(element)) {
    return element.map((e) => createTransition(e, type)).join(', ')
  }
  return createTransition(element, type)
}

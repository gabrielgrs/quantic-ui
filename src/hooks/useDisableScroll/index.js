import { useState, useEffect } from 'react'

function useDisableScroll(condition) {
  const [scrolldisabled, setScrolldisabled] = useState(false)

  useEffect(() => {
    setScrolldisabled(condition)
    document.documentElement.style.overflow = condition ? 'hidden' : 'auto'
    document.body.scroll = condition ? 'no' : 'yes'
  }, [condition])

  return { scrolldisabled }
}

export default useDisableScroll

import { useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"

const createWrapperEleAndAppendToBody = (wrapperId) => {
  const ele = document.createElement('div')
  ele.setAttribute('id', wrapperId)
  document.body.append(ele)

  return ele
}

const Portal = ({ children, wrapperId }) => {
  const [wrapperEle, setWrapperEle] = useState(null)

  useLayoutEffect(() => {
    let ele = document.getElementById(wrapperId)
    let systemCreated = false
    if (!ele) {
      systemCreated = true
      ele = createWrapperEleAndAppendToBody(wrapperId)
    }
    setWrapperEle(ele)

    return () => {
      if (systemCreated && ele.parentElement) {
        ele.parentNode.removeChild(ele)
      }
    }
  }, [])

  if(!wrapperEle) return null
  return createPortal(children, wrapperEle)
}

export default Portal
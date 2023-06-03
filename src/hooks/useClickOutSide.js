import { useEffect, useRef, useState } from 'react'

export default function useClickOutSide(buttonShow) {
  const [show, setShow] = useState(false)
  const nodeRef = useRef()

  const handleOnClickNode = () => {
    setShow(!show)
  }

  useEffect(() => {
    function handleClickOutNode(event) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(event.target) &&
        !event.target.matches(buttonShow)
      ) {
        setShow(false)
      }
    }

    document.addEventListener('click', handleClickOutNode)

    return () => {
      document.removeEventListener('click', handleClickOutNode)
    }
  }, [])

  return {
    show,
    setShow,
    nodeRef,
    handleOnClickNode,
  }
}

import { useEffect, useRef } from "react";

const EffectOnlyOnce = () => {
  const initialRender = useRef(true)
  useEffect(() => {
    if(!initialRender.current) {
      console.log('always!')
    }  else {
      initialRender.current = false
    }

  });

  return <div />
}

export default EffectOnlyOnce

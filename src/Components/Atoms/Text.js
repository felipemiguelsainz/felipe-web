import { useMemo } from "react";
import './Text.css'
export default function Text ({children, variant, color}) {
  const computedClass = useMemo(() => {
    return `${variant} ${color}`
  }, [variant, color])
  return <div className={computedClass}>{children}</div>
}

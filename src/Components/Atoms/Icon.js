import {useMemo} from "react";
import './Icon.css'
export default function Icon ({iconName, color, size = 'md', iconAction}) {
  const setIconClass = useMemo(() => `material-icons ${color} ${iconName} ${size}`, [iconName, color, size])
  return <i onClick={iconAction} className={setIconClass} />
}

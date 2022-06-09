import './ContactForm.css'
import {useMemo, useRef} from "react";
import axios from "axios";
export default function ContactForm({theme}) {
  const name = useRef('')
  const email = useRef('')
  const msg = useRef('')
  const inputsThemeClass = useMemo(() => `${theme} input`, [theme])
  const containerThemeClass = useMemo(() => `${theme} form-container`, [theme])
  const btnThemeClass = useMemo(() => `${theme} submit-btn`, [theme])
  function validateForm() {
    return !!(name.current && /(.)+@(\w|\W)+\.(\w)+/.test(email.current) && msg.current)
  }
  async function submitForm(e) {
    e.preventDefault()
    if (validateForm()) {
      console.log('Se manda')
    await axios.post('https://formsubmit.co/ajax/felipemiguelsainz@gmail.com', {
      message: `Hola, Felipe, ${name.current} con el email ${email.current} te envió el siguiente mensaje: ${msg.current}`,
      name: 'Felipe page',
    })
    }
  }
   return (
     <form className={containerThemeClass}>
       <div className={inputsThemeClass}>
         <label >Nombre</label>
         <input type="text" className="" onInput={(e) => {name.current = e.target.value}}/>
       </div>
       <div className={inputsThemeClass}>
         <label >Correo</label>
         <input type="text" onInput={(e) => {email.current = e.target.value}}/>
       </div>
       <div className={inputsThemeClass}>
         <label>Mensaje</label>
         <textarea onInput={(e) => {msg.current = e.target.value}} />
       </div>
       <button type="submit" className={btnThemeClass} onClick={submitForm}>ENVIAR</button>
     </form>
   )
 }

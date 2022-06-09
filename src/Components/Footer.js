import Icon from "./Atoms/Icon";
import './footer.css'
import {animateScroll as scroll} from 'react-scroll'
import {Link} from 'react-scroll'
export default function Footer ({theme}) {
  const icons = [
    {icon: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/in/felipe-miguel-sainz-277123b2/'},
    {icon: 'fa-brands fa-github', link: 'https://github.com/felipemiguelsainz'},
    {icon: 'fa-brands fa-twitter', link: 'https://twitter.com/felipesainz1'},
  ]
  function openLink(link='') {
    window.open(link)
  }
  return (
    <div className="footer">
      <div className="texts">
        <Link onClick={() => scroll.scrollToTop()} className={`${theme} cursor-pointer`}>Volver arriba</Link>
        <p className={theme}>@ COMPANY 2022</p>
        <p className={theme}>Privacidad</p>
        <p className={theme}>Terms of use</p>
      </div>
      <div className="icons">
        {
          icons.map((el, index) => (<Icon iconAction={openLink} key={index} color={theme} iconName={el.icon} size="sm" />))
        }
      </div>
    </div>)
}

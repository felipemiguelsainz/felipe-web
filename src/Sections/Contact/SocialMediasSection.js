import Icon from "../../Components/Atoms/Icon";
import './SocialMediasSection.css'
export default function SocialMediasSection ({theme}) {
  const icons = [
    {icon: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/in/felipe-miguel-sainz-277123b2/'},
    {icon: 'fa-brands fa-github', link: 'https://github.com/felipemiguelsainz'},
    {icon: 'fa-brands fa-twitter', link: 'https://twitter.com/felipesainz1'},
  ]
  function openLink(link='') {
    window.open(link)
  }
  return (
    <div className="social-medias-container" id='contact'>
      <h4 className={theme}>¡Búscame en las redes!</h4>
      <div className="icons-row">
        {
          icons.map((el, index) => (<Icon iconAction={() => openLink(el.link)} key={index} color={theme} iconName={el.icon} />))
        }
      </div>
    </div>
  )
}

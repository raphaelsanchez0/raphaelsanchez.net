import instagram from './assets/instagram-icon.png'
import linkedin from './assets/linkedin-icon.png'
import github from './assets/github-icon.png'

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/raphiesanchez" target='_blank'>
                <button><img src={instagram} alt="instagram link" /></button>
            </a>
            <a href='https://www.linkedin.com/in/raphael-sanchez-a460251ba' target='_blank'>
                <button><img src={linkedin} alt="linkedin link" /></button>
            </a>
            <a href='https://github.com/raphaelsanchez0' target='_blank'>
                <button><img src={github} alt="github link" /></button>
            </a>
        </div>
    )
}
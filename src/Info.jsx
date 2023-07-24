import profilePicture from './assets/profile-img.png'
import mail from './assets/mail.png'

export default function Info() {

    const emailAddress = `sanchezraphael0@gmail.com`
    return (
        <div className='info'>
            <img src={profilePicture} className="info--image" />
            <div className='info-content'>
                <h1 className='info--name' alt="Profile Picture">Raphael Sanchez</h1>
                <h4 className='info--title'>Fontend Developer</h4>
                <h5 className='info--website'>raphaelsanchez.net</h5>
                <a className='info--link' href={`mailto:${emailAddress}`}>
                    <button className='info--button'><img src={mail}></img>Email</button>
                </a>
            </div>
        </div >
    )
}

import './Footer.css'
import footerSunImg from '/images/footerSun.svg'
import compasImg from '/images/compas.svg'
import smileImg from '/images/smile.svg'

function Footer() {
    return (
        <div>
            <footer>
                <img src={footerSunImg} alt="" />
                <img src={compasImg} alt="" />
                <img src={smileImg} alt="" />
            </footer>
        </div>
    )
}

export default Footer

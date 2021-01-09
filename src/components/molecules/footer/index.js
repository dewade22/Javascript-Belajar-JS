import React from 'react'
import { IconDiscord, IconFB, IconGithub, IconIG, IconTelegram, IconTwitter, LogoBlog } from '../../../assets'
import './footer.scss'

const Icon = ({img}) =>{
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoBlog} alt="Logo"/>
                </div>
                <div className="social-wrapper">
                    <Icon img={IconFB} />
                    <Icon img={IconTwitter} />
                    <Icon img={IconIG} />
                    <Icon img={IconTelegram} />
                    <Icon img={IconDiscord} />
                    <Icon img={IconGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>copyright</p>
            </div>
        </div>
    )
}

export default Footer

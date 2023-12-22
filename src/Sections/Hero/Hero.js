import './Hero.css'
import {PrimaryButton} from '../../Components/index'
const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-text'>
                <div className='hero-subtitle'>Welcome To Cyborg</div>
                <h4 className='hero-title'><em>BROWSE</em> OUR POPULAR GAMES HERE</h4>
                <PrimaryButton>
                    Browse Now
                </PrimaryButton>
            </div>  
        </div>
    )
}

export default Hero
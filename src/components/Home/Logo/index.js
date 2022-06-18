import LogoS from '../../../assets/images/logoa1a.png'
import './index.scss'

const Logo = () => {


  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logoa1a.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="1089px"
        height="900px"
        version="1.0"
        viewBox="-203 -108 1089 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(1 - 1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M792.8,586.2V293.3c0-64.3-14.1-129.8-54.6-184.4
		c10.1,33.7,14.4,68.4,14.4,103.2v292.9c0,68.1,4.6,134.3,18.6,187.8H610.7l13.4,81.2h187.6C797.4,720.5,792.8,653.9,792.8,586.2z
		 M567.3,594.1h-6.9c-63.4,61.3-185,116.3-346.9,116.3c-148.4,0-249.8-46.8-303-110c20.9,100.6,136.6,191.1,343.3,191.1
		c148.1,0,262.8-46,329.5-101L567.3,594.1z M72.7,469.5c0,38.2,15.4,68.1,40.5,89.8c-0.3-3-0.3-6-0.3-9
		c0-142.9,225.9-175.8,440-176.5V293C328.3,290,72.7,317.3,72.7,469.5z M290.7-2.9C185.1-2.9,74.9,19.9-4.5,55.5L-11,42.7l0,0
		l46.7,93.9c79.8-35.5,189.9-58.4,295.2-58.4c114.4,0,178.8,28.4,214.5,64.7C534.6,78.6,484.6-2.9,290.7-2.9z 
    M607.5,675.2h-7.2c-5.2,5.2-11.1,10.5-17.3,15.3l0.3,2.2h26.8
		L607.5,675.2z
    M752.3,505.1V212.2c0-34.8-4.2-69.9-14.4-103.2
		C702-8.9,591.1-108,321.1-108C178.2-108,42.3-80.3-51.6-38.4L-11,42.7l6.5,12.7C75.3,19.9,185.4-2.9,290.7-2.9
		c193.9,0,243.9,81.5,255,145.9c2.3,12.7,2.9,24.7,2.9,35.2v16.1c-438.1-1.5-681.9,102.1-681.9,291.4c0,40,14.7,80,43.8,114.8
		c53.3,63.6,154.6,110,303,110c161.8,0,283.4-55,346.9-116.3h6.9l16,96.5c6.2-5.2,12.1-10.1,17.3-15.3h7.2l2.9,17.6h160.5
		C756.9,639.3,752.3,573.1,752.3,505.1z M72.7,469.5C72.7,317.3,328,290,553.2,293.3v135.8c0,14.6-4.6,30.7-11.8,45.3
		c-32.7,66.2-126.5,130.9-274.3,130.9c-61.8,0-118-15-153.6-46C88,537.6,72.7,507.7,72.7,469.5z
    "
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
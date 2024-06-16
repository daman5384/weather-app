import './Info.css'
import windImg from '/images/wind.svg'
import humidityImg from '/images/humidity.svg'
import pressureImg from '/images/pressure.svg'
import sunriseImg from '/images/sunrise.svg'
import sunsetImg from '/images/sunset.svg'
import sunnyday from '/images/sunnyday.svg'
import cloud from '/images/cloud.svg'
import PropTypes from 'prop-types'

function Info({ wind, pressure, humidity, status, sunrise, sunset }) {
  return (
    <div>
      <div className="info-container">
        <div className="gradient">
          <img className='icon' src={windImg} alt="" />
          <p>Wind</p>
          <p>{wind} km/h</p>
        </div>
        <li className="gradient">
          <img className='icon' src={pressureImg} alt="" />
          <p>Pressure</p>
          <p>{pressure} MB</p>
        </li>
        <li className="gradient">
          <img className='icon' src={humidityImg} alt="" />
          <p>Humidity</p>
          <p>{humidity}%</p>
        </li>
        <li className="gradient">
          <img className='icon' src={sunsetImg} alt="" />
          <p>Sunset</p>
          <p>{sunset}</p>
        </li>
        <li className="gradient">
          <img className='icon' src={sunriseImg} alt="" />
          <p>Sunrise</p>
          <p>{sunrise}</p>
        </li>
        <li className="gradient">
          <img className='icon' src={status == 'Clear' ? sunnyday : cloud} alt="" />
          <p>Status</p>
          <p>{status}</p>
        </li>
      </div>
    </div>
  )
}
Info.propTypes = {
  wind: PropTypes.number,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  status: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
}

export default Info

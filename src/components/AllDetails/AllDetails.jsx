import './AllDetails.css'
import cloudImg from '/images/cloud.svg'
import visibilityImg from '/images/visibility.svg'
import sealevelImg from '/images/sea_level.svg'
import groundImg from '/images/ground.svg'
import propTypes from 'prop-types';

function AllDetails({ AllDetailsData }) {
    return (
        <div>
            <div className="container">
                <div className="details-card">
                    <div className="mobileDetailCard">
                        <p>Sea level</p>
                        <img src={sealevelImg} alt="" />
                        <p>{AllDetailsData.main.sea_level}hpa</p>
                    </div>
                    <div className="details-section">
                        <div className="open-details-section">
                            <li>
                                <p>Temperature</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.temp}<sup>o</sup>C</span>
                            </li>
                            <li>

                                <p>Feels_Like</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.feels_like}<sup>o</sup>C</span>
                            </li>
                            <li>
                                <p>Temp_Min</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.temp_min}<sup>o</sup>C</span>
                            </li>
                            <li>
                                <p>Temp_Max</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.temp_max}<sup>o</sup>C</span>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="details-card">
                    <div className="mobileDetailCard">
                        <p>Ground</p>
                        <img src={groundImg} alt="" />
                        <p>{AllDetailsData.main.grnd_level}hpa</p>
                    </div>
                    <div className="details-section">
                        <div className="open-details-section">
                            <li>
                                <p>Pressure</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.pressure} hpa</span>
                            </li>
                            <li>
                                <p>Humidity</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.humidity}%</span>
                            </li>
                            <li>
                                <p>Sea level</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.sea_level} hpa</span>
                            </li>
                            <li>
                                <p>Grnd_level</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.grnd_level} hpa</span>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="details-card">
                    <div className="mobileDetailCard">
                        <p>Visiblity</p>
                        <img src={visibilityImg} alt="" />
                        <p>{AllDetailsData.visibility}m</p>
                    </div>
                    <div className="details-section">
                        <div className="open-details-section">
                            <li>
                                <p>Status</p>
                                <span>-</span>
                                <span>{AllDetailsData.weather[0].main}</span>
                            </li>
                            <li>
                                <p>Clouds</p>
                                <span>-</span>
                                <span>{AllDetailsData.clouds.all}</span>
                            </li>
                            <li>

                                <p>Description</p>
                                <span>-</span>
                                <span>{AllDetailsData.weather[0].description}</span>
                            </li>
                            <li>
                                <p>Visibility</p>
                                <span>-</span>
                                <span>{AllDetailsData.visibility}m</span>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="details-card">
                    <div className="mobileDetailCard">
                        <p>Clouds</p>
                        <img src={cloudImg} alt="" />
                        <p>{AllDetailsData.clouds.all}</p>
                    </div>
                    <div className="details-section">
                        <div className="open-details-section">
                            <li>
                                <p>Wind Speed</p>
                                <span>-</span>
                                <span>{AllDetailsData.wind.speed}m/s</span>
                            </li>
                            <li>

                                <p>Degree</p>
                                <span>-</span>
                                <span>{AllDetailsData.wind.deg}<sup>o</sup></span>
                            </li>
                            <li>
                                <p>Gust</p>
                                <span>-</span>
                                <span>{AllDetailsData.wind.gust}m/s</span>
                            </li>
                            <li>
                                <p>Temp_Kf</p>
                                <span>-</span>
                                <span>{AllDetailsData.main.temp_kf}<sup>o</sup></span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

AllDetails.propTypes = {
    AllDetailsData: propTypes.object
}

export default AllDetails


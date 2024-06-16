
import cloudImg from '/images/cloud.svg'
import './TempSlate.css'
import propTypes from 'prop-types';
import moment from 'moment'

function TempSlate({ todayHourData }) {

    const time = function (unformattedTime) {
        let formattedTime = moment(new Date(unformattedTime)).format('LT').split(":")[0] + " " + moment(new Date(unformattedTime)).format('LT').split(" ")[1]
        return formattedTime;
    }
    const time2 = function (unformattedTime) {
        let formattedTime = moment(new Date(unformattedTime)).format('LLLL').slice(0, 7) + " " + moment(new Date(unformattedTime)).format('LT').split(":")[0] + " " + moment(new Date(unformattedTime)).format('LT').split(" ")[1]
        return formattedTime;
    }
    return (
        <div>
            <div className="temp-slate">
                {todayHourData.map((element) => {
                    if (element.dt) {
                        return <div key={element.dt} className="currentTemp">
                            <div className="mobile-details">
                                <p>{time(element.dt_txt)}</p>
                                <img src={cloudImg} alt="" />
                                <p>{parseInt(element.main.temp)}<sup>o</sup>C</p>
                            </div>
                            <div className="details">
                                <p>{time2(element.dt_txt)}</p>
                                <hr />
                                <div className="open-details">
                                    <li>
                                        {/* <img src={sunImg} alt="" /> */}
                                        <p>T</p>
                                        <span>-</span>
                                        <span>{parseInt(element.main.temp)}<sup>o</sup>C</span>
                                    </li>
                                    <li>

                                        {/* <img src={humidityImg} alt="" /> */}
                                        <p>H</p>
                                        <span>-</span>
                                        <span>{parseInt(element.main.humidity)}%</span>
                                    </li>
                                    <li>

                                        {/* <img src={pressureImg} alt="" /> */}
                                        <p>P</p>
                                        <span>-</span>
                                        <span>{parseInt(element.main.pressure)}MB</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    }
                })}
            </div>
        </div>
    )
}

TempSlate.propTypes = {
    todayHourData: propTypes.array
}

export default TempSlate


import './WeatherMain.css'
import propTypes from 'prop-types';
import Banner from '../Banner/Banner'
import Info from '../Info/Info'
import moment from 'moment'
import TempSlate from '../TempSlate/TempSlate';
import AllDetails from '../AllDetails/AllDetails';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';


function WeatherMain({ weatherData, search, hourData, loading }) {

  //---------------------- current date---------------------

  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = today.getDate();
  let currentDate = `${date} ${monthNames[month]}, ${dayNames[day]}`

  //--------------------sunrise sunset-----------------------

  let sunriseUnix = weatherData.sys.sunrise;
  let sunsetUnix = weatherData.sys.sunset;
  let sunrise = moment(new Date(sunriseUnix * 1000)).format('LT');
  let sunset = moment(new Date(sunsetUnix * 1000)).format('LT');

  //--------------------sunrise sunset-----------------------
  let todayHourData = hourData.list.slice(0, 6);
  let AllDetailsData = hourData.list[0];
  return (
    <>
      {loading === true && <Loading />}
      <Banner city={weatherData.name} temp={weatherData.main.temp} currentDate={currentDate} search={search} />
      <Info wind={weatherData.wind.speed} pressure={weatherData.main.pressure} humidity={weatherData.main.humidity} status={weatherData.weather[0].main} sunrise={sunrise} sunset={sunset} />
      <TempSlate todayHourData={todayHourData} />
      <AllDetails AllDetailsData={AllDetailsData} />
      <Footer />
    </>
  )
}

WeatherMain.propTypes = {
  weatherData: propTypes.object,
  hourData: propTypes.object,
  search: propTypes.func,
  loading: propTypes.bool
}

export default WeatherMain


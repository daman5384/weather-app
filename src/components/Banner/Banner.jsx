import './Banner.css'
import PropTypes from 'prop-types';
import arrowUpImg from '/images/arrowUp.svg'
import searchImg from '/images/search.svg'

function Banner({ temp, city, currentDate, search }) {

  //------------------------handle search function---------------------------

  const handleSearch = function () {
    let searchCity = document.getElementById('search-box');

    if (searchCity.value.length !== 0) {
      search(searchCity.value)
    }
  }

  return (
    <div>
      <div className="banner">
        <div className="blur">
          <ul className="link-container">
            <li className="link"><a href="">Home</a><div className="line"></div></li>
            <li className="link"><a href="">Daily Forcast</a></li>
            <li className="link"><a href="">About Us</a></li>
          </ul>
          <div className="date">{currentDate}</div>
          <div className="searchBox-container">
            <input type="text" name="search-box" id="search-box" placeholder='Enter your location ...' />
            <img src={searchImg} alt="" onClick={handleSearch} />
          </div>
          <div className="temp">{parseInt(temp)}<sup>o</sup>C</div>
          <div className="city">{city}<img src={arrowUpImg} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

Banner.propTypes = {
  temp: PropTypes.number,
  city: PropTypes.string,
  currentDate: PropTypes.string,
  search: PropTypes.func,
}

export default Banner

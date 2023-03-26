import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


const App = () => {
  const apiKey = "a8ee91c3203fcfc639452060ac5f608e";

  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("")

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    axios.get(apiUrl).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  }

  const handleSearch = () => {
    getWeatherDetails(inputCity)
  }

  useEffect(() => {
    getWeatherDetails("Delhi")
  }, [])



  return (
    <>

      <div className="landscape">
        <div className="mountain"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
        <div className="sun-container sun-container-1">
        </div>
        <div className="sun-container">
          <div className="sun"></div>
        </div>
        <div className="cloud"></div>
        <div className="cloud cloud-1"></div>
        <div className="sun-container sun-container-reflection">
          <div className="sun"></div>
        </div>
        <div className="light"></div>
        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
        <div className="light light-4"></div>
        <div className="light light-5"></div>
        <div className="light light-6"></div>
        <div className="light light-7"></div>
        <div className="water">

          <div className="col-md-8 text-black box" >
            {Object.keys(data).length > 0 &&
              // <div className='col-md-4 text-center mt-5'>
              <div className='container'>
                <div class="row justify-content-md-center" style={{ zIndex: "100" }}>
                  <div className='col-md-8 bg-success justify-content-md-center mt-5'>
                    <div className='shadow rounded wetherResultBox' style={{ opacity:  "0.6"}}>

                      <div className='row'>
                        <div className='col' style={{ margin: "14px", marginTop: "30px" }}>
                          <div className="d-flex">
                            <input className="form-control me-2" style={{ width: "430px" }} type="search" placeholder="Search" aria-label="Search" value={inputCity} onChange={handleChangeInput} />
                            <button style={{
                              marginLeft: "440px", padding: "5px", paddingRight: "20px", borderRadius: "5px",
                              backgroundColor: "#faae9d"
                            }} type="submit" onClick={handleSearch}>
                              <i class="fa-solid fa-magnifying-glass mt-1" style={{ marginRight: "20px" }}
                              ></i>&nbsp;
                            </button>
                          </div>

                        </div>
                        <div className='col' style={{ marginTop: "120px" }}>
                          <h5 className='weatherCity mt-3 ms-3'>{data?.name}</h5>
                          <h6 className='weatherTem mt-5 ms-2 mb-5'>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
                        </div>
                        <div className="col align-self-end">
                          <img className='weatherIcon' style={{ marginLeft: "350px", marginTop: "120px" }} src="images/weather-icon-13.png" alt="weather.jpg" />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* </div> */}
                </div>
              </div>
            }</div>

        </div>
        <div className="splash"></div>
        <div className="splash delay-1"></div>
        <div className="splash delay-2"></div>
        <div className="splash splash-4 delay-2"></div>
        <div className="splash splash-4 delay-3"></div>
        <div className="splash splash-4 delay-4"></div>
        <div className="splash splash-stone delay-3"></div>
        <div className="splash splash-stone splash-4"></div>
        <div className="splash splash-stone splash-5"></div>
        <div className="lotus lotus-1"></div>
        <div className="lotus lotus-2"></div>
        <div className="lotus lotus-3"></div>
        <div className="front">
          <div className="stone"></div>
          <div className="grass"></div>
          <div className="grass grass-1"></div>
          <div className="grass grass-2"></div>
          <div className="reed"></div>
          <div className="reed reed-1"></div>
        </div>
      </div>

      {/* <div className="col-md-12">
        <div className="weatherBg">
          <h1 className='heading'>Weather App</h1>

          <div className='d-grid gap-3 col-4 mt-4'>
            <input type="text" className="form-control" value={inputCity} onChange={handleChangeInput} />
            <button className='btn btn-primary' type='button' onClick={handleSearch}>Search</button>
          </div>
        </div>


      </div> */}
    </>
  )
}

export default App

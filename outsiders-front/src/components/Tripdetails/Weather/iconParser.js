import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiDayRain,
  WiDayThunderstorm,
  WiSnow,
  WiFog,
  WiNightClear,
  WiNightCloudy,
  WiNightShowers,
  WiNightRain,
  WiNightThunderstorm
} from "react-icons/wi";

/**
 * Icon Parser
 * use custom icons for weather instead of those from the weather API
 * @param {string} ref - icon ref on the weather API
 */
const iconPaser = (ref) => {
  if (ref === '01d') {
    return <WiDaySunny />
  } else if (ref === '02d') {
    return <WiDayCloudy />
  } else if (ref === '03d' || ref === '03n') {
    return <WiCloud />
  } else if (ref === '04d' || ref === '04n') {
    return <WiCloudy />
  } else if (ref === '09d') {
    return <WiDayShowers />
  } else if (ref === '10d') {
    return <WiDayRain />
  } else if (ref === '11d') {
    return <WiDayThunderstorm />
  } else if (ref === '13d' || ref === '13n') {
    return <WiSnow />
  } else if (ref === '50d' || ref === '50n') {
    return <WiFog />
  } else if (ref === '01n') {
    return <WiNightClear />
  } else if (ref === '02n') {
    return <WiNightCloudy />
  } else if (ref === '09n') {
    return <WiNightShowers />
  } else if (ref === '10n') {
    return <WiNightRain />
  } else if (ref === '11n') {
    return <WiNightThunderstorm />
  }
};

export default iconPaser;
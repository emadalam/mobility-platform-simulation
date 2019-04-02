import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import useSocket from './hooks/useSocket'

import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'

import {Icon} from 'leaflet'
import {Map, Marker, TileLayer} from 'react-leaflet'

const CarIcon = new Icon({
  iconUrl: require('./assets/car.svg'),
  iconSize: [28, 28],
  iconAnchor: [14, 14],
})
const ManIcon = new Icon({
  iconUrl: require('./assets/man.svg'),
  iconSize: [28, 28],
  iconAnchor: [14, 14],
})
const CityCenter = {lat: 52.520008, lng: 13.404954}

const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '100vh',
    margin: '0 auto',
  },
})

const App = ({classes}) => {
  const [data, setData] = useState(null)
  const [socket] = useSocket()

  socket.on('test_data', ({payload}) => {
    setData(payload)
  })

  // test map with sample position data
  const [position, setPosition] = useState(CityCenter)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const lat = position.lat - 0.0001
      const lng = position.lng - 0.0001
      setPosition({lat, lng})
    }, 500)
    return () => clearInterval(intervalId)
  }, [position])

  const cabLocation = [position.lat, position.lng]
  const customerLocation = [52.5, 13.3]

  return (
    <main className={classes.root}>
      <CssBaseline />
      <Map
        className={classes.map}
        center={[CityCenter.lat, CityCenter.lng]}
        zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={cabLocation} icon={CarIcon} />
        <Marker position={customerLocation} icon={ManIcon} />
      </Map>
    </main>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)

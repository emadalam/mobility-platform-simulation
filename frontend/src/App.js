import React, {useState} from 'react'
import PropTypes from 'prop-types'
import useSocket from './hooks/useSocket'

import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
  },
})

const App = ({classes}) => {
  const [data, setData] = useState(null)
  const [socket] = useSocket()

  socket.on('test_data', ({payload}) => {
    setData(payload)
  })

  return (
    <main className={classes.root}>
      <CssBaseline />
      <div>Simulation App!</div>
      {data || 'Awaiting websocket server connection...'}
    </main>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)

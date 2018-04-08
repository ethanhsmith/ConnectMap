import React from 'react'
import Map from './Map.jsx'
import { GoogleApiWrapper } from 'google-maps-react'
import MapComponent from './Map.jsx';

export class Container extends React.Component {
    render() {
    const style = {
        width: '100vw',
        height: '100vh'
      }

      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
        <div style={style}>
            <MapComponent google={this.props.google} />
        </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCrosBBpF5PmbfP-OjCwxokmfF-WjUBs48'
  })(Container)
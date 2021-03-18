import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {
    static propTypes = {

    }

    render() {
        const style = {
            position: 'relative',  
            width: '50%',
            height: '500px'
          }
        return (
            <div style={{position:'relative !important'}}>
                <Map google={this.props.google} zoom={14} style={style}
                    initialCenter={{
                    lat: 23.214139,
                    lng: 72.685206
                    }}
                    onClick={this.onMapClicked}>
 
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
        
                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
                </InfoWindow>
            </Map>
            </div>
            
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAZfJc_1DzAYw2idfgQqhLwOFs7SPglg5Q")
  })(GoogleMap)

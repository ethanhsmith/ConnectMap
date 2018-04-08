import React from 'react'
import ReactDOM from 'react-dom'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        if (!this.props.google) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Map
                    style={{
                        minWwidth: "200px",
                        minHeight: "200px"
                    }}
                    google={this.props.google}
                    zoom={14}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        icon={{
                            url: "/img/icon.svg",
                            anchor: new this.props.google.maps.Point(32, 32),
                            scaledSize: new this.props.google.maps.Size(64, 64)
                        }}
                        name={"Current location"}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default MapComponent
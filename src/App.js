import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import "./App.css";

class App extends Component {
  state = {
    coords: {
      lat: 24.9295263,
      lng: 67.112967
    }
  };
  componentDidMount() {
    this.getCurrentLocation();
  }

  callBackMethod = () => {};

  AddPushPinOnClick = location => {
    console.log(location);
  };

  // center={[13.0827, 80.2707]}

  // { latitude: 13.098010681042723, longitude: 80.27535069056923, altitude: 0, altitudeReference: -1 }

  // 24.9295263, 67.112967 NED's location

  // 25.085652,66.9391882                  Hamdard University Coords
  // 25.083689559297724, 67.01035089588673 Hamdard University Coords

  // 24.923076853975758, 67.09553560426069 Van's is here

  // 24.932654479859565, longitude: 67.12692048230217 Vans Starting Point

  // 24.9188652981706, 67.09609718181558 -- Via Nipa

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        coords: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  };

  render() {
    const { lat, lng } = this.state.coords;
    console.log("currentcoords", lat, lng);
    return (
      <div className="App">
        <h2>Musafir by Blockhacks</h2>
        <div style={{ width: "100%", height: 500 }}>
          <ReactBingmaps
            bingmapKey="AuVp_1Me7C_eYGVp-VodiCNVZn77y4z_akffdxpoZNavrWnxVFJvHWJsl94VjhqR"
            center={[lat, lng]}
            // infoboxes={[
            //   {
            //     location: [24.923076853975758, 67.09553560426069],
            //     option: { title: "Karachi", description: "..." },
            //     addHandler: { type: "click", callback: this.callBackMethod }
            //   }
            // ]}
            infoboxesWithPushPins={[
              {
                location: [lat, lng],
                addHandler: "mouseover", //on mouseover the pushpin, infobox shown
                infoboxOption: {
                  description: "Just for development purpose."
                },
                pushPinOption: {
                  title: "Current Location",
                  description: ""
                }
              },
              {
                location: [24.933144163526038, 67.11078417999266],
                addHandler: "mouseover", //on mouseover the pushpin, infobox shown
                infoboxOption: {
                  title: "",
                  description: "A student is waiting here"
                },
                pushPinOption: {
                  title: "Student",
                  description: "",
                  color: "green"
                }
              },
              {
                location: [24.923076853975758, 67.09553560426069],
                addHandler: "mouseover", //on mouseover the pushpin, infobox shown
                infoboxOption: {
                  title: "",
                  description: "Van is here right now"
                },
                pushPinOption: {
                  title: "Van's here",
                  description: "",
                  color: "blue"
                },
                infoboxAddHandler: {
                  type: "click",
                  callback: this.callBackMethod
                },
                pushPinAddHandler: {
                  type: "click",
                  callback: this.callBackMethod
                }
              }
            ]}
            directions={{
              wayPoints: [
                {
                  location: [24.91275613450658, 67.0694567034912],
                  address: "Van's Starting Place",
                  isViaPoint: false
                },
                // {
                //   location: [24.932761092689802, 67.12534580240713],
                //   // Location(latitude: number, longitude: number)
                //   address: "via",
                //   isViaPoint: false
                // },
                {
                  location: [24.98581243144062, 67.06553769354224],
                  address: "Van's Destination: Hamdarad University",
                  isViaPoint: false
                }
              ]
            }}
            getLocation={{
              addHandler: "click",
              callback: this.AddPushPinOnClick
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;

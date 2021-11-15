import React, { Component, lazy, Suspense } from 'react'
import GoogleMapReact from 'google-map-react'
import styles from './MapContainer.module.scss'

import MapMarker from '../MapMarker/MapMarker'
import UserMarker from '../UserMarker/UserMarker'
import Loading from '../Loading/Loading'

const SideBar = lazy(() => import('../SideBar/SideBar'))

class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: null,
    }
  }

  openStoreWindow = (item) => {
    this.setState({
      selectedItem: item,
    })
  }

  closeWindow = () => {
    this.setState({
      selectedItem: null,
      mapIcon: './images/MapIcon.svg',
    })
  }
  render() {
    const { location, displayedLocations, searchValue, user } = this.props
    const { selectedItem } = this.state
    return (
      <div className={styles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{
            // key: '',
            language: 'en',
            region: 'US',
          }}
          defaultCenter={location}
          defaultZoom={11}
        >
          {displayedLocations.map((item) => {
            const { id, location } = item
            return (
              <MapMarker
                key={id}
                lat={location.lat}
                lng={location.lng}
                item={item}
                selected={item === selectedItem}
                openStoreWindow={() => this.openStoreWindow(item)}
              />
            )
          })}
          <UserMarker
            lat={location.lat}
            lng={location.lng}
            image={user.image}
          />
        </GoogleMapReact>
        {selectedItem && (
          <Suspense fallback={<Loading />}>
            <SideBar
              data={this.state.selectedItem}
              searchValue={searchValue}
              closeWindow={this.closeWindow}
            />
          </Suspense>
        )}
      </div>
    )
  }
}

export default MapContainer

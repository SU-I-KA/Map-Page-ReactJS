import React, { Component, Suspense, lazy } from 'react'
import styles from './MapSearchWrap.module.scss'
import { data } from '../../../services/data'

import Loading from '../Loading/Loading'

const SearchSection = lazy(() => import('../SearchSection/SearchSection'))
const MapContainer = lazy(() => import('../MapContainer/MapContainer'))

class MapSearchWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationDefault: null,
      location: { lat: null, lng: null },
      locationOptions: ['current location'],

      typeDefault: null,
      typeOptions: [],
      displayedLocations: [],
      user: {},
      searchValue: 'black t-shirt',
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        {
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        },
        this.setData()
        // ()=> console.log(this.state.location)
      )
    })
    // this.setData()
  }

  setData = () => {
    const { locationOptions } = this.state
    const locationDefault = locationOptions[0]
    const user = data.user
    const typeOptions = data.types.map((type) => type.title)
    const typeDefault = typeOptions[0]

    const displayedLocations = data.types[0].list

    this.setState({
      locationDefault,

      typeDefault,
      typeOptions,
      displayedLocations,

      user,
    })
  }

  getData = (searchValue, selectedType) => {
    this.setState({
      searchValue: searchValue,
    })
    // get locations & set it to displayedLocations
  }

  render() {
    return (
      <div className={styles.contents}>
        <Suspense fallback={<Loading />}>
          <SearchSection
            typeDefault={this.state.typeDefault}
            typeOptions={this.state.typeOptions}
            locationDefault={this.state.locationDefault}
            locationOptions={this.state.locationOptions}
            getData={this.getData}
            searchValue={this.state.searchValue}
          />

          <MapContainer
            displayedLocations={this.state.displayedLocations}
            location={this.state.location}
            searchValue={this.state.searchValue}
            user={this.state.user}
          />
        </Suspense>
      </div>
    )
  }
}

export default MapSearchWrap

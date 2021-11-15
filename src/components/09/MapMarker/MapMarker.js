import React, { Component } from 'react'
import styles from './MapMarker.module.scss'

class MapMarker extends Component {
  render() {
    const { item, openStoreWindow, selected } = this.props
    const { logo, transparent } = item
    const mapIcon = selected
      ? './images/MapIconBlack.svg'
      : './images/MapIcon.svg'
    const itemLogo = selected ? transparent : logo
    return (
      <div
        className={styles.wrapMarker}
        onClick={() => {
          openStoreWindow()
        }}
      >
        <div
          className={styles.logoWrap}
          style={{
            backgroundImage: `url(${mapIcon})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `0% 0%`,
            backgroundAttachment: `scroll`,
            backgroundSize: 'cover',
          }}
        >
          <img src={itemLogo} alt='logo' />
        </div>
      </div>
    )
  }
}

export default MapMarker

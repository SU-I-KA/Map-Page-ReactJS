import React, { Component } from 'react'
import styles from './UserMarker.module.scss'

const userImage = './images/userWrap.svg'

class UserMarker extends Component {
  render() {
    const { image } = this.props
    return (
      <div className={styles.wrapMarker}>
        <div
          className={styles.logoWrap}
          style={{
            backgroundImage: `url(${userImage})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `0% 0%`,
            backgroundAttachment: `scroll`,
            backgroundSize: 'cover',
          }}
        >
          <img src={image} alt='profile pic' />
        </div>
      </div>
    )
  }
}

export default UserMarker

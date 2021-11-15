import React, { Component } from 'react'
import styles from './Store.module.scss'
import { Link } from 'react-router-dom'

class Store extends Component {
  render() {
    const { title, logo, bg, url } = this.props.store
    const bgCover = {
      backgroundColor: 'transparent',
      backgroundImage: `url(${bg})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `55% 0%`,
      backgroundAttachment: `scroll`,
      backgroundSize: 'cover',
      width: '100%',
    }
    return (
      <div style={bgCover} className={styles.single__store}>
        <div className={styles.overlay}></div>
        <div className={styles.branch__logo}>
          <div className={styles.logo__img__wrap}>
            <img src={logo} alt={title} />
          </div>
          <h3>{title}</h3>
        </div>
        <div className={styles.row}>
          <div className={styles.btn__shopping}>
            <Link to={url}>Start Shopping</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Store

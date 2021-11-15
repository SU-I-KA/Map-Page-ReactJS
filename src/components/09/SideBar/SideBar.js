import React, { Component } from 'react'
import styles from './SideBar.module.scss'
import Product from '../Product/Product'
import Store from '../Store/Store'

class SideBar extends Component {
  render() {
    const { data, searchValue, closeWindow } = this.props
    const { name, logo, branch, products, store } = data
    return (
      <div className={styles.sideBarContainer}>
        <div className={styles.headInfo}>
          <div className={styles.logo}>
            <img src={logo} alt={name} />
          </div>
          <div className={styles.info}>
            <h3>{name}</h3>
            <p>{branch}</p>
          </div>
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.head}>
            <div className={styles.searchTag}>{searchValue}</div>
            <div
              className={styles.count}
            >{`(${products.length} products)`}</div>
          </div>
          <div className={styles.productsGrid}>
            {products.map((item) => {
              return <Product key={item.id} product={item} />
            })}
          </div>
        </div>
        <div className={styles.storeContainer}>
          <div className={styles.title}>Take a tour inside the branch</div>
          <Store store={store} />
        </div>
        <button className={styles.closeWindow} onClick={closeWindow}></button>
      </div>
    )
  }
}

export default SideBar

import React, { Component, lazy, Suspense } from 'react'
import styles from './SearchSection.module.scss'

import Loading from '../Loading/Loading'

const DropDownMenu = lazy(() => import('../DropDownMenu/DropDownMenu'))

class SearchSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: props.searchValue,
      selectedLocation: props.locationDefault,
      selectedType: props.typeDefault,
    }
  }

  getSelectedInfo = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  submitInfo = () => {
    // just console log for now
    const { searchValue, selectedType } = this.state
    console.log(this.state)
    this.props.getData(searchValue, selectedType)
  }

  handleSubmit = (e) => {
    // prevent default
    e.preventDefault()
  }

  render() {
    const { locationDefault, locationOptions, typeDefault, typeOptions } =
      this.props
    const { searchValue } = this.state
    return (
      <div className={styles.searchWrap}>
        <div className={styles.container}>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.form__group}>
              <div className={styles.form__control}>
                <label>Search for:</label>
                <input
                  className={styles.input__text}
                  type='text'
                  name='searchItem'
                  placeholder={searchValue}
                  onChange={(e) =>
                    this.setState({ searchValue: e.target.value })
                  }
                />
              </div>
              <div className={styles.selectLocation}>
                <label>location:</label>
                <Suspense fallback={<Loading />}>
                  <DropDownMenu
                    defaultOption={locationDefault}
                    optionsList={locationOptions}
                    name='selectedLocation'
                    getSelectedInfo={this.getSelectedInfo}
                  />
                </Suspense>
              </div>
              <div className={styles.selectType}>
                <label>type:</label>
                <Suspense fallback={<Loading />}>
                  <DropDownMenu
                    defaultOption={typeDefault}
                    optionsList={typeOptions}
                    name='selectedType'
                    getSelectedInfo={this.getSelectedInfo}
                  />
                </Suspense>
              </div>

              <div className={styles.btn__control}>
                <button
                  className={styles.btn__search}
                  onClick={this.submitInfo}
                >
                  search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchSection

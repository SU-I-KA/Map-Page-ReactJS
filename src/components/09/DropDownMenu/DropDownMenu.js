import React, { Component } from 'react'
import styles from './DropDownMenu.module.scss';


class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.defaultOption,
            open: false,
        };
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
        this.setState({
            open: !this.state.open,
        })
    }

    handleChange =(event)=>{
        const value = event.target.value;
        const name = event.target.name;
       
        this.setState({
            selectedOption: value,
            open: false,
        }
        ,()=> this.props.getSelectedInfo(name, value)
        )
    }

    render() {
        const {selectedOption} = this.state;
        const {optionsList, name} = this.props;
        return (
            
            <div className={`${styles.select__wrap} ${this.state.open? styles.active:null}`}>
                <ul className={styles.default__option} onClick={this.handleToggle}>
                    <li>
                        <div className={styles.option}>
                            <input type="radio" name={name} />
                            <span>{selectedOption && selectedOption}</span>
                        </div>
                    </li>
                </ul>
                            
                <ul className={styles.select__ul}>
                    {
                        optionsList.map((item, index) =>{
                            return (
                                <li key={index}>
                                    <label className={styles.option}>
                                        <input type="radio" name={name} value={item} onClick={(e)=>this.handleChange(e)}/>
                                        <span>{item}</span>
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default DropDownMenu

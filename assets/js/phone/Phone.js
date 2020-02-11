import React, {Component} from "react";
import PropTypes from 'prop-types';
import PhoneApp from "./PhoneApp";
import PhoneList from "../phone/PhoneList";
import CustomerList from "./CustomerList";
import SinglePhone from "./SinglePhone";

export default class Phone extends Component {

    constructor(props) {
        super(props);

        this.state = {
            handleClickPhone: false,
            handleClickSinglePhone: false,
            handleClickCustomer: false,
            isLoaded: true,
        };
    }

    render() {
        const {isLoaded} = this.state;

        if(this.props.handleClickPhone === true){
            return(
                <PhoneList
                    {...this.props}
                    {...this.state}
                    isLoaded={isLoaded}
                />
                );
        }
        if(this.props.handleClickCustomer === true){
            return(
                <CustomerList
                    {...this.props}
                    {...this.state}
                    isLoaded={isLoaded}
                />
            );
        }
         return( <div> <p> Cliquer sur un lien pour éffectuer une requéte  </p></div> );
    }
}

// Valid propTypes
Phone.propTypes = {
    Result: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    handleClickPhone: PropTypes.bool.isRequired,
    handleClickSinglePhone: PropTypes.bool.isRequired,
    handleClickCustomer: PropTypes.bool.isRequired,
};













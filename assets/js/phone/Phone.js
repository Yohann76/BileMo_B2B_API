import React, {Component} from "react";
import PropTypes from 'prop-types';
import PhoneApp from "./PhoneApp";
import PhoneList from "../Phone/PhoneList";
import CustomerList from "./CustomerList";

export default class Phone extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: true,
        };
    }

    render() {
        const {isLoaded} = this.state;

        console.log('view phone: ' + this.props.handleClickPhone);
        console.log('view 1 phone: ' + this.props.handleClickSinglePhone);
        console.log('view customer: ' + this.props.handleClickCustomer);

        if(this.props.handleClickPhone === true){
            return(
                <PhoneList
                    {...this.props}
                    {...this.state}
                    isLoaded={isLoaded}
                />
                );
        }
        if (this.props.handleClickSinglePhone === true){
            return(
                <PhoneList
                    {...this.props}
                    {...this.state}
                    isLoaded={isLoaded}
                />
            );
        }
         if (this.props.handleClickCustomer === true){
            return(
                <CustomerList
                    {...this.props}
                    {...this.state}
                    isLoaded={isLoaded}
                />
            );
        }
         return( <div> <p> Cliquer sur un bouton pour éffectuer la requéte  </p></div> );
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













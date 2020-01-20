import React, {Component} from "react";
import PropTypes from 'prop-types';
import Phone from "./Phone";

import { getPhone, getSinglePhone , getCustomer} from "../api/rep_phone_api";

//controller
export default class PhoneApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            handleClickPhone: false,
            handleClickSinglePhone: false,
            handleClickCustomer: false,
            Result:  [],
            isLoaded: true,
        };

        this.handleClickPhone = this.handleClickPhone.bind(this);
        this.handleClickSinglePhone = this.handleClickSinglePhone.bind(this);
        this.handleClickCustomer = this.handleClickCustomer.bind(this);
    }

    reinizializeState() {
        this.setState({
            handleClickPhone: false,
            handleClickSinglePhone: false,
            handleClickCustomer: false,
            Result : [],
            isLoaded: false,
        });
        console.log('reinizializeState')
    }

    /////////////////
    // for data click
    /////////////////

    handleClickPhone(event){
        this.reinizializeState();
        console.log("click smartphone");

        getPhone()
            .then((data) => {
                console.log(data);
                this.setState({
                    Result: data,
                    isLoaded: true,
                    handleClickPhone: true
                })
            });
    }

    handleClickSinglePhone(event) {
        this.reinizializeState();
        console.log("click  one smartphone");

        getSinglePhone()
            .then((data) => {
                console.log(data);
                this.setState({
                    Result: [ data ],
                    isLoaded: true,
                    handleClickSinglePhone: true
                })
            });
    }

    handleClickCustomer(event) {
        this.reinizializeState();
        console.log("click  customers");

        getCustomer()
            .then((data) => {
                console.log(data);
                this.setState({
                    Result: [ data ],
                    isLoaded: true,
                    handleClickCustomer: true
                })
            });
    }


    render() {
        const { Smartphone,SinglePhone,Customer, isLoaded , Result } = this.state;

        return (
            <div>
                <button
                    className="btn"
                    onClick={(event) => this.handleClickPhone() }> Phone list
                </button>

                <button
                    className="btn"
                    onClick={(event) => this.handleClickSinglePhone() }>Single phone
                </button>

                <button
                    className="btn"
                    onClick={(event) => this.handleClickCustomer() }>Customers
                </button>


                <Phone
                    {...this.props}
                    {...this.state}
                    handleClickPhone={this.state.handleClickPhone}
                    handleClickSinglePhone={this.state.handleClickSinglePhone}
                    handleClickCustomer={this.state.handleClickCustomer}
                />
            </div>
        );
    }
}
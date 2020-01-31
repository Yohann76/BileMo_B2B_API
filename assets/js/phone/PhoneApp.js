import React, {Component} from "react";
import Phone from "./Phone";
import { getPhone, getSinglePhone , getCustomer} from "../api/PhoneApi";

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
    }

    /////////////////
    // for data click
    /////////////////

    handleClickPhone(event){
        this.reinizializeState();

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

    handleClickCustomer(event) {
        this.reinizializeState();

        getCustomer()
            .then((data) => {
                console.log(data);
                this.setState({
                    Result:  data ,
                    isLoaded: true,
                    handleClickCustomer: true
                })
            });
    }


    render() {
        const { Smartphone,SinglePhone,Customer, isLoaded , Result } = this.state;

        return (
            <div>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-phone"
                           role="tab" aria-controls="nav-home" aria-selected="true"
                           onClick={(event) => this.handleClickPhone() }> Phone list</a>

                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-customer"
                           role="tab" aria-controls="nav-profile" aria-selected="false"
                           onClick={(event) => this.handleClickCustomer() }>Customers</a>
                    </div>
                <br/>
                <br/>
                <br/>

                <Phone
                    {...this.props}
                    {...this.state}
                    handleClickPhone={this.state.handleClickPhone}
                    handleClickCustomer={this.state.handleClickCustomer}
                />
            </div>
        );
    }
}
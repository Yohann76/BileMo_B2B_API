import React, {Component} from "react";
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import Phone from "./Phone";
import RepPhone from "../RepPhone/RepPhone";


//controller
export default class PhoneApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Phone:  [
                 // { id:uuid(), reps:25, itemLabel: 'My phone', totalWeightLifted: 41 }
            ],
        };

        this.handleClickPhone = this.handleClickPhone.bind(this);
        this.handleClickSinglePhone = this.handleClickSinglePhone.bind(this);
        this.handleClickCustomer = this.handleClickCustomer.bind(this);

    }

    handleClickPhone(event){
        console.log("click smartphone");

        this.setState({
            Phone: [],
        })

        const newRep = {
            id: uuid(),
           // reps: 23,
            itemLabel: 'List Phone',
            totalWeightLifted: Math.floor(Math.random() * 50)
        };

        this.setState(prevState => {
            const newPhone = [...prevState.Phone, newRep];
            return {Phone: newPhone};
        })
    }

    handleClickSinglePhone(event) {
        console.log("click  one smartphone");

        this.setState({
            Phone: [],
        })

        const newRep = {
            id: uuid(),
            reps: 0,
            itemLabel: 'Single Phone',
          //  totalWeightLifted: Math.floor(Math.random() * 50)
        };

        this.setState(prevState => {
            const newPhone = [...prevState.Phone, newRep];
            return {Phone: newPhone};
        })
    }

    handleClickCustomer(event) {
        console.log("click  customers");

        this.setState({
            Phone: [],
        })

        const newRep = {
            id: uuid(),
            reps: 0,
            itemLabel: 'Customer',
            totalWeightLifted: Math.floor(Math.random() * 50)
        };

        this.setState(prevState => {
            const newPhone = [...prevState.Phone, newRep];
            return {Phone: newPhone};
        })
    }


    render() {
        const { Smartphone,SinglePhone,Customer } = this.state;
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
                    Smartphone={this.handleClickPhone}
                    SinglePhone={this.handleClickSinglePhone}
                    Customer={this.handleClickCustomer}
                />
            </div>
        );
    }
}

// Valid propTypes
PhoneApp.propTypes = {
};


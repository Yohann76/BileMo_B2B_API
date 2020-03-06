import React, {Component} from "react";
import Phone from "./Phone";
import {getSinglePhone} from "../api/PhoneApi";
import SinglePhone from "./SinglePhone";

export default class PhoneList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Result: [],
            handleClickSinglePhone: false,
            handleClickPhone: false,
            handleClickCustomer: false,
            isLoaded: true,
        };

        this.handleClickSinglePhone = this.handleClickSinglePhone.bind(this);
    }

    handleClickSinglePhone(event, id) {
        this.reinizializeState();
        getSinglePhone(id)
            .then((data) => {
                console.log(data);
                this.setState({
                    Result: [ data ],
                    isLoaded: true,
                    handleClickSinglePhone: true,
                    handleClickPhone: false,
                    handleClickCustomer: false,
                })
            });
    }

    reinizializeState() {
        this.setState({
            Result : [],
            isLoaded: false,
            handleClickPhone: false,
            handleClickSinglePhone: false,
            handleClickCustomer: false,
        });
    }

    render() {
        if (this.state.handleClickSinglePhone == true) {
            return (
                <SinglePhone
                    {...this.props}
                    {...this.state}
                    isLoaded={true}

                />
            );
        }

        const { Result } = this.props;

        return (
            <table className="table">
                <thead className="table table-dark">
                <tr>
                    <th scope="col-xs-3">ID</th>
                    <th scope="col-xs-3">Name</th>
                    <th scope="col-xs-3">Price</th>
                    <th scope="col-xs-3">View More</th>
                </tr>
                </thead>
                <tbody>
                {Result.map((Result) => {
                    return (
                        <tr
                            key={Result.id}
                        >
                            <td>{Result.id}</td>
                            <td>{Result.name}</td>
                            <td>{Result.price}</td>
                            <td>
                                <a href="#nav-customer" onClick={(event) => this.handleClickSinglePhone(event, Result.id)}>
                                    <i className="fas fa-hand-point-right"> View More </i>
                                </a>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}
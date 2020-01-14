import React, {Component} from "react";
import RepPhone from "./RepPhone";
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { getRepPhone, deleteRepPhone } from "../api/rep_phone_api";

//controller
export default class RepPhoneApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            highlightedRowId: null,
            repPhone:  [
              //  { id:uuid(), reps:25, itemLabel: 'My phone', totalWeightLifted: 41 }
            ],
            numberOfHearts: 1,
            isLoaded: false,
        };

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleAddRepPhone = this.handleAddRepPhone.bind(this);
        this.handleHeartChange = this.handleHeartChange.bind(this);
        this.handleDeleteRepPhone = this.handleDeleteRepPhone.bind(this);
    }

    componentDidMount(){
        // function requete api
        getRepPhone()
            .then((data) => {
                console.log(data);
                this.setState({
                    repPhone: data,
                    isLoaded: true
                })
            });
    }

    handleRowClick(repLogId) {
        this.setState({highlightedRowId: repLogId}) ;
    }

    // submit and edit state
    handleAddRepPhone(itemLabel, reps) {
        const newRep = {
            id: uuid(),
            reps: reps,
            itemLabel: itemLabel,
            totalWeightLifted: Math.floor(Math.random() * 50)
        };

        this.setState(prevState => {
            const newPhoneLogs = [...prevState.repPhone, newRep];
            return {repPhone: newPhoneLogs};
        })
    }

    handleHeartChange(heartCount) {
        this.setState({
            numberOfHearts: heartCount
        });
    }

    handleDeleteRepPhone(id) {
        // Api
        // deleteRepPhone(id);

        // manual update state
        this.setState((prevState) => {
            return {
                repPhone: prevState.repPhone.filter(repPhone => repPhone.id !== id)
            };
        });
    }

    render() {
        return (
            <RepPhone
                {...this.props}
                {...this.state}
                onRowClick={this.handleRowClick}
                onAddRepPhone={this.handleAddRepPhone}
                onHeartChange={this.handleHeartChange}
                onDeleteRepPhone={this.handleDeleteRepPhone}
            />
        )
    }
}

// Valid propTypes
RepPhoneApp.propTypes = {
    withHeart: PropTypes.bool
}
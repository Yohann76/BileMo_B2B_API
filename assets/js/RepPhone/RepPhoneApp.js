import React, {Component} from "react";
import RepPhone from "./RepPhone";
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

//controller
export default class RepPhoneApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            highlightedRowId: null,
            repPhone:  [
                { id: uuid(), reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5 },
                { id: uuid(), reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180 },
                { id: uuid(), reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72 }
            ]
        };

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleNewItemSubmit = this.handleNewItemSubmit.bind(this);
    }

    handleRowClick(repLogId) {
        this.setState({highlightedRowId: repLogId}) ;
    }

    // submit and edit state
    handleNewItemSubmit(itemLabel, reps) {
        const repPhone = this.state.repPhone;
        const newRep = {
            id: uuid(),
            reps: reps,
            itemLabel: itemLabel,
            totalWeightLifted: Math.floor(Math.random() * 50)
        };

        repPhone.push(newRep);
        this.setState({repLogs: repPhone});
    }

    render() {
        return (
            <RepPhone
                {...this.props}
                {...this.state}
                onRowClick={this.handleRowClick}
                onNewItemSubmit={this.handleNewItemSubmit}

            />
        )
    }
}

// Valid propTypes
RepPhoneApp.propTypes = {
    withHeart: PropTypes.bool
}
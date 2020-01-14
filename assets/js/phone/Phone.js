import React, {Component} from "react";
import RepPhoneCreator from "../RepPhone/RepPhoneCreator";
import PropTypes from 'prop-types';
import PhoneList from "../Phone/PhoneList";

export default function Phone(props) {

    const { Phone } = props;

    return (
        <div>
            <br/>
            <h2>test : </h2>


            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Modele</th>
                    <th>Color</th>
                    <th>Prix</th>
                </tr>
                </thead>


                <PhoneList
                    Phone={Phone}
                />

            </table>
        </div>
    );
}

// Valid propTypes
Phone.propTypes = {
    Phone: PropTypes.array.isRequired,
};












import React from "react";
import Phone from "./Phone";
import PropTypes from 'prop-types';

export default function PhoneList(props) {

    const { Phone } = props;

    return (
        <tbody>
        {Phone.map((Phone) => {
            return (
                <tr
                    key={Phone.id}
                >
                    <td>{Phone.id}</td>
                    <td>{Phone.itemLabel}</td>
                    <td>{Phone.reps}</td>
                    <td>{Phone.totalWeightLifted}</td>

                </tr>
            );
        })}
        </tbody>
    );
}

// Valid propTypes
Phone.propTypes = {
    Phone: PropTypes.array.isRequired,
};

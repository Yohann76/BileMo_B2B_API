import React from "react";
import Phone from "./Phone";
import PropTypes from 'prop-types';

export default function PhoneList(props) {

    const { Result, isLoaded } = props;

    if (!isLoaded) {
        return (
            <td className="text-center"> Loading...</td>
        );
    }

    return (
        <tbody>
        {Result.map((Result) => {
            return (
                <tr
                    key={Result.id}
                >
                    <td>{Result.id}</td>
                    <td>{Result.name}</td>
                    <td>{Result.price}</td>
                    <td>{Result.color}</td>
                    <td>{Result.description}</td>
                </tr>
            );
        })}
        </tbody>
    );
}

// Valid propTypes
Phone.propTypes = {
    Result: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
};
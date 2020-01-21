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
        <table className="table">
            <thead className="table table-dark">
            <tr>
                <th scope="col-xs-3">ID</th>
                <th scope="col-xs-3">Name</th>
                <th scope="col-xs-3">Price</th>
            </tr>
            </thead>
            <tbody>
                    {Result.map((Result) => {
                        return (
                            <tr key={Result.id}>
                                <td>{Result.id}</td>
                                <td>{Result.name}</td>
                                <td>{Result.price}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

// Valid propTypes
Phone.propTypes = {
    Result: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
};
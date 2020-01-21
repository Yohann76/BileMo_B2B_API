import React from "react";
import Phone from "./Phone";
import PropTypes from 'prop-types';

export default function SinglePhone(props) {

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
                <th scope="col-xs-3">color</th>
                <th scope="col-xs-3">description</th>
            </tr>
            </thead>
            <tbody>
            {Result.map((Result) => {
                return (
                    <tr key={Result.id}>
                        <td>{Result.id}</td>
                        <td>{Result.name}</td>
                        <td>{Result.price}</td>
                        <td>{Result.color}</td>
                        <td>{Result.description}</td>

                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

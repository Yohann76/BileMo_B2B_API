import React from "react";
import Phone from "./Phone";
import PropTypes from 'prop-types';

export default function CustomerList(props) {

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
                <th scope="col-xs-3">Mail</th>
                <th scope="col-xs-3">users </th>
            </tr>
            </thead>
            <tbody>
            {Result.map((Result) => {
                return (
                    <tr
                        key={Result.id}
                    >
                        <td>{Result.id}</td>
                        <td>{Result.username}</td>
                        <td>{Result.email}</td>
                        <td>{Result.users.id}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
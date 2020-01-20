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
        <tbody>
        {Result.map((Result) => {
            return (
                <tr
                    key={Result.id}
                >
                    <td>{Result.id}</td>
                    <td>{Result.username}</td>
                    <td>{Result.roles}</td>
                </tr>
            );
        })}
        </tbody>
    );
}
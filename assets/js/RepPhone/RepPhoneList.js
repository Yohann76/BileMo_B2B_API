import React from "react";
import PropTypes from 'prop-types';

export default function RepPhoneList(props) {

    const { highlightedRowId, onRowClick, repPhone } = props;

    return (
        <tbody>
        {repPhone.map((repLog) => {
            return (
                <tr
                    key={repLog.id}
                    className={highlightedRowId === repLog.id ? 'info' : ''}
                    onClick={ () => onRowClick(repLog.id) }
                >
                    <td>{repLog.itemLabel}</td>
                    <td>{repLog.reps}</td>
                    <td>{repLog.totalWeightLifted}</td>
                    <td>Intéragir</td>
                </tr>
            );
        })}
        </tbody>
    );
}

// Valid propTypes
RepPhoneList.propTypes = {
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    repPhone: PropTypes.array.isRequired
};
import React from "react";
import PropTypes from 'prop-types';

export default function RepPhoneList(props) {

    const { highlightedRowId, onRowClick, onDeleteRepPhone, repPhone, isLoaded } = props;

    const handleDeleteClick = function(event, repPhoneId) {
        event.preventDefault();
        onDeleteRepPhone(repPhoneId);
    };

    if (!isLoaded) {
        return (
            <tbody>
            <tr>
                <td colSpan="4" className="text-center">Loading...</td>
            </tr>
            </tbody>
        );
    }

    return (
        <tbody>
        {repPhone.map((repPhone) => {
            return (
                <tr
                    key={repPhone.id}
                    className={highlightedRowId === repPhone.id ? 'info' : ''}
                    onClick={ () => onRowClick(repPhone.id) }
                >
                    <td>{repPhone.itemLabel}</td>
                    <td>{repPhone.reps}</td>
                    <td>{repPhone.totalWeightLifted}</td>
                    <td>
                        <a href="#" onClick={(event) => handleDeleteClick(event, repPhone.id) }>
                            <span className="fa fa-trash"></span>
                        </a>
                    </td>
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
    onDeleteRepPhone: PropTypes.func.isRequired,
    repPhone: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
};
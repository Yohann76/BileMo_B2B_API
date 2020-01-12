import React from "react";
import RepPhoneList from "./RepPhoneList";
import PropTypes from 'prop-types';
import RepPhoneCreator from "./RepPhoneCreator";


function calculateTotalWeightLifted(repLogs) {
    let total = 0;
    for (let repLog of repLogs) {
        total += repLog.totalWeightLifted;
    }
    return total;
}

const calculateTotalWeightFancier = repPhone => repPhone.reduce((total, log) => total + log.totalWeightLifted, 0);

export default function RepPhone(props) {

    const { withHeart, highlightedRowId, onRowClick , repPhone, onNewItemSubmit} = props;

    let heart = '';
    if (withHeart) {
        heart = <span>❤</span>;
    }


    return (
        <div className="col-md-7">
            <h2>Les utilisateurs! {heart}</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Age</th>
                    <th>Taille</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>

                <RepPhoneList
                    hightlightedRowId={highlightedRowId}
                    onRowClick={onRowClick}
                    repPhone={repPhone}
                />

                <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <th>Total</th>
                    <th>{calculateTotalWeightFancier(repPhone)}</th>
                    <td>&nbsp;</td>
                </tr>
                </tfoot>
            </table>

            <RepPhoneCreator
                onNewItemSubmit={onNewItemSubmit}
            />
        </div>
    );
}

// Valid propTypes
RepPhone.propTypes = {
    withHeart: PropTypes.bool,
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    onNewItemSubmit: PropTypes.func.isRequired,
    repPhone: PropTypes.array.isRequired
};
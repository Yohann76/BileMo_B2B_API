import React from "react";
import RepPhoneList from "./RepPhoneList";
import PropTypes from 'prop-types';
import RepPhoneCreator from "./RepPhoneCreator";
//import RepPhoneCreator from "./RepPhoneCreatorControlledComponent";


function calculateTotalWeightLifted(repLogs) {
    let total = 0;
    for (let repLog of repLogs) {
        total += repLog.totalWeightLifted;
    }
    return total;
}

const calculateTotalWeightFancier = repPhone => repPhone.reduce((total, log) => total + log.totalWeightLifted, 0);

export default function RepPhone(props) {

    const {
        withHeart,
        highlightedRowId,
        onRowClick,
        repPhone,
        onAddRepPhone,
        numberOfHearts,
        onHeartChange,
        onDeleteRepPhone,
        isLoaded
    } = props;

    let heart = '';
    if (withHeart) {
        heart = <span>{'❤'.repeat(numberOfHearts)}</span>;
    }


    return (
        <div className="col-md-7">
            <h2>Les utilisateurs! {heart}</h2>

            <input
                // number for number and range for progres bar
                type="range"
                value={numberOfHearts}
                onChange={(e) => {
                    onHeartChange(+e.target.value);
                }}

            />


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
                    onDeleteRepPhone={onDeleteRepPhone}
                    isLoaded={isLoaded}
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

            <div className="row">
                <div className="col-md-8">
                    <RepPhoneCreator
                        onAddRepPhone={onAddRepPhone}
                    />
                </div>
            </div>

        </div>
    );
}

// Valid propTypes
RepPhone.propTypes = {
    withHeart: PropTypes.bool,
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    onAddRepPhone: PropTypes.func.isRequired,
    onHeartChange: PropTypes.func.isRequired,
    onDeleteRepPhone: PropTypes.func.isRequired,
    repPhone: PropTypes.array.isRequired,
    numberOfHearts: PropTypes.number.isRequired,
    isLoaded: PropTypes.bool.isRequired,
};
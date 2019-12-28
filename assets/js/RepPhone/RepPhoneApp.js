import React, {Component} from "react";

export default class RepPhoneApp extends Component {
    render() {
        let heart = '';
        if (this.props.withHeart) {
            heart = <span>❤</span>;
        }

        // fake data
        const repLogs = [
            { id: 1, reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5 },
            { id: 2, reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180 },
            { id: 8, reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72 }
        ];

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
                    <tbody>
                       {repLogs.map((repLog) => {
                           return (
                               <tr key={repLog.id}>
                                   <td>{repLog.itemLabel}</td>
                                   <td>{repLog.reps}</td>
                                   <td>{repLog.totalWeightLifted}</td>
                                   <td>Intéragir</td>
                               </tr>
                           );
                       })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>&nbsp;</td>
                        <th>Total</th>
                        <th>TODO</th>
                        <td>&nbsp;</td>
                    </tr>
                    </tfoot>
                </table>
            </div>


        );
    }
}
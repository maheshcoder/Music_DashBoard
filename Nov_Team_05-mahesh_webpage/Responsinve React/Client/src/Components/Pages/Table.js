// Table.js
import React from 'react';
import './Table.css';

const Table = () => {
    return (
        <div className="table-container">
            <h1 className="table-title">Table Page</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Day</th>
                        <th>Genre</th>
                        <th>Interest Level</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rayudu</td>
                        <td>sunday</td>
                        <td>Pop</td>
                        <td>Vibe</td>
                        <td>1900-2000,2000-2010</td>
                    </tr>
                    <tr>
                        <td>Mike</td>
                        <td>Saturday</td>
                        <td>Rock</td>
                        <td>Vibe</td>
                        <td>2000-2010</td>
                    </tr>
                    <tr>
                        <td>Parumall</td>
                        <td>saturnday</td>
                        <td>Hip-hop</td>
                        <td>Vibe</td>
                        <td>2000-2010</td>
                    </tr>
                    <tr>
                        <td>wade</td>
                        <td>sunday</td>
                        <td>classical</td>
                        <td>Focus</td>
                        <td>1900-2000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;

import React, { Component } from 'react'
export default class Table extends Component {

    render() {
        let nameInfo = this.props.nameInfo,
            searchTerms = this.props.searchTerms.trim().toLowerCase();
        if (searchTerms.length > 0) {
            nameInfo = nameInfo.filter((i) => {
                return i.name.toLowerCase().match(searchTerms);
            });
        }
        return (

            <div className="container">
                <div className="row">
                    <table className="table mt-5" border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nameInfo.length > 0 ?
                                nameInfo.map(({ name, gender, _id }) => {
                                    return <tr key={_id}>
                                        <td>{name}</td>
                                        <td>{gender}</td>
                                    </tr>;
                                }) : <td colSpan={2} className="text-center text-danger">No data found</td>}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

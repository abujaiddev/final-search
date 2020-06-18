import React, { Component } from 'react'
import Table from './Table'
import nameInfo from './nameInfo.json'

export default class TextField extends Component {
    render() {
        return (
            <>
                <input type="text" className="form-control" name={this.props.name} value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} />
                <Table nameInfo={nameInfo} searchTerms={this.props.value} />
            </>
        )
    }
}

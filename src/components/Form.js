import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListCurrency from './ListCurrency';
import { convertCurrency } from '../actions/index';

class Form extends Component {

    state = {
        from: '',
        to: '',
        value: 0,
    }

    onValueChange = (e) => {
        this.setState({ value: e.target.value })
    };

    onValueFromChange = (e) => {
        this.setState({ from: e.target.value })
    };

    onValueToChange = (e) => {
        this.setState({ to: e.target.value })
    };

    submit = () => {
        const data = {
            from: this.state.from,
            to: this.state.to,
            value: this.state.value
        };
        this.props.convertCurrency(data);
    };

    render() {
        return (
            <form >
                <div className="row  justify-content-md-center">
                    <div className="input-group input-group-lg">
                        <input onChange={(e) => this.onValueChange} type="number" className="form-control" />
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-md-6">
                        <label htmlFor="formSelectFROM">De:</label>
                        <ListCurrency source="of" onValueChange={this.onValueFromChange} />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="formSelectTO">Para:</label>
                        <ListCurrency source="to" onValueChange={this.onValueToChange} />
                    </div>
                </div>
                <div className="row">
                    <button type="button" onClick={this.submit} className="btn btn-primary btn-lg btn-block">Converter</button>
                </div>
            </form>
        );
    }
};

// const mapDispatchToProps = dispatch =>
//     bindActionCreators(convertCurrency, dispatch);


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        convertCurrency
    }, dispatch);
}


export default connect(null, mapDispatchToProps)(Form);

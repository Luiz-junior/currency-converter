import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListCurrency from './ListCurrency';
import { convertCurrency } from '../actions/index';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            convert: {
                from: '',
                to: '',
            }
        }
    }

    onValueChange = (e) => {
        console.log(e.target.value);
    };

    onValueFromChange = (e) => {
        console.log("FROM: ", e.target.value);
    };

    onValueToChange = (e) => {
        console.log("TO: ", e.target.value);
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
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Converter</button>
                </div>
            </form>
        );
    }
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(convertCurrency, dispatch);

export default connect(null, mapDispatchToProps)(Form);

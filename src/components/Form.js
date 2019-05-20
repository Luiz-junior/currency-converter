import React from 'react';

import ListCurrency from './ListCurrency';

const Form = props => {
    return (
        <form >
            <div className="row justify-content-md-center">
                <div className="input-group input-group-lg">
                    <input type="number" className="form-control" />
                </div>
            </div>

            <div className="row form-group">
                <div className="col-md-6">
                    <label htmlFor="formSelectOF">De:</label>
                    <ListCurrency source="of" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="formSelectFor">Para:</label>
                    <ListCurrency source="to" />
                </div>
            </div>
            <div className="row">
                <button type="submit" className="btn btn-primary btn-lg btn-block">Converter</button>
            </div>
        </form>
    );
};

export default Form;

// 62 98446-4712
import React from 'react';

const Form = props => {
    return (
        <form className="">
            <div className="row justify-content-md-center">
                <div className="input-group input-group-lg">
                    <input type="number" className="form-control" />
                </div>
            </div>

            <div className="row form-group">
                <div className="col-md-6">
                    <label for="formSelectOF">De:</label>
                    <select className="form-control" id="formSelectOF">
                        <option value="BRL" label="R$">R$</option>
                        <option value="USD" label="USD">USD</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label for="formSelectFor">Para:</label>
                    <select className="form-control" id="formSelectOF">
                        <option value="BRL" label="R$">R$</option>
                        <option value="USD" label="USD" selected>USD</option>
                    </select>
                </div>
                <a href="#" className="btn btn-primary">Converter</a>
            </div>
        </form>
    );
};

export default Form;
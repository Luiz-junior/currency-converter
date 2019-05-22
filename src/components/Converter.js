import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';

const Converter = props => {
    return (
        <div className="content">
            <div className="row justify-content-md-center">
                <div className="card text-center w-50">
                    <div className="card-header bg-dark text-white">
                        Xumes Corretora
                    </div>
                    <div className="card-body">
                        <Form />
                    </div>
                    <div className="card-footer text-light bg-dark">
                        {props.convert.quotes && props.convert.quotes[Object.keys(props.convert.quotes)[0]]}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    convert: state.convert,
});

export default connect(mapStateToProps, null)(Converter);
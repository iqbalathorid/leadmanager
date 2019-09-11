import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';


export class Form extends Component {
    state = {
        name: "",
        email: "",
        massage: ""
    };

    static propTypes = {
        addLead: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, email, massage } = this.state;
        const lead = { name, email, massage };
        this.props.addLead(lead);
    };
    render() {
        const { name, email, massage } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Massage</label>
                        <input
                            className="form-control"
                            type="text"
                            name="massage"
                            onChange={this.onChange}
                            value={massage}
                        />
                    </div>
                    <div className="from-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addLead })(Form);

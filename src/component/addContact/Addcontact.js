import React from "react";
import './AddContact.css';

class AddContact extends React.Component {
    state = {
        name: '',
        email: ''
    }

    submitContact = (e) =>{
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert('Please provide a name and email address');
            return;
        }
        //pass in the addContactHandler as prop from the app.js
        this.props.addContactHandler(this.state);
        this.setState({name: '', email: ''});

    }
    render() {
        return (
            <form action="" onSubmit={this.submitContact}>
                <h2 className="title">Add Contact</h2>
                <div className="form-control">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder='Email'
                        name='email'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                </div>
                <input type="submit" value='Save Contact' className='btn btn-block' />
            </form>
        );
    }
}

export default AddContact;
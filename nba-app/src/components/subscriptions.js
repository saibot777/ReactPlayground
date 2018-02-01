import React, {Component} from 'react';

class Subscriptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        }
    }

    saveSubscription = (email) => {
        const URL_EMAIL = 'http://localhost:3004/subcriptions';

        fetch(URL_EMAIL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
            .then(res => res.json())
            .then(() => {
                this.setState({
                    email: ''
                })
            })

    };

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            this.saveSubscription(email)
        } else {

        }
    };

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        })
    };

    render() {
        return (
            <div className="subscribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            placeholder="yourmail@email.com"
                            onChange={this.onChangeInput}
                            value={this.state.email}
                            type="text"/>
                    </form>
                </div>
                <small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto dicta doloremque doloribus eaque error expedita facere fuga
                    incidunt iusto molestiae officiis perspiciatis quam,
                    quas quibusdam quidem quo sint tempora voluptas.
                </small>
            </div>
        )
    }
}

export default Subscriptions;
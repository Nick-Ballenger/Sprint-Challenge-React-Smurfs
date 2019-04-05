import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar  extends Component {P

    render() {
        return (
            <div>
                <Link to ="/">
                    <h3>HOME</h3>
                </Link>
                <Link to = "/smurf-form">
                    <h3>ADD SMURF</h3>
                </Link>
            </div>

        )
    }

}

export default NavBar;
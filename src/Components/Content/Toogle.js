import React, { Component } from 'react'

export default class Toogle extends Component {
    state = {
        open: false,
    }

    toogle = () => {
        this.setState({ 
            open: !this.state.open
         });
    }


    render() {
        const { toogleMe } = this.props;
        return (
            <div>
                {toogleMe ({
                    open: this.state.open,
                    toogle: this.toogle,
                })}
            </div>
        )
    }
}

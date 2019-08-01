import React, {Component} from 'react';

export default class PageTitle extends Component{

    state = {
        title : ""
    }

    componentDidMount(){
        let newTitle = this.props.title;

        this.setState({ title: newTitle});
    }

    render() {
        return(
            <h1>{this.state.title}</h1>
        );
    }
}
import React, {Component} from 'react';
import './style.css'

export default class PageTitle extends Component{

    state = {
        title : ""
    }

    componentDidMount(){
        let newTitle = this.props.title;
        this.setState({ title: newTitle});
    }

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title) {
            console.log("this.props - didUpdate: ", this.props.title)
          this.setState({ title: this.props.title })
        }
      }

    render() {
        console.log("this.state: ", this.state.title)
        console.log("this.props: ", this.props.title)
        return(
            <div className="title-div">
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}
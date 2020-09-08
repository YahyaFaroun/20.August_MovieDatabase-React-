import React, { Component } from 'react';

class DataComponent extends Component {
    state = {  }
    render() { 
        return (  
            <article>
                <h4>{this.props.titel}</h4>
                <p>{this.props.year}</p>
                <p>{this.props.director}</p>
                <p>{this.props.duration}</p>
                <p>{this.props.genre}</p>
                <p>{this.props.rate}</p>
            </article>
        );
    }
}
 
export default DataComponent;
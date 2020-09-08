import React, { Component } from 'react';
import './App.css';
import movieDatei from './data'
import DataComponent from './Components/DataComponent'


class DataFunction extends Component {
  state = { moviesState:movieDatei }


  sortAscending = () => {
    console.log("work")
    // const newArray = this.state.state.movie.map(movie => {
    const sortedAscending = this.state.moviesState.sort((elt1, elt2)=>
    elt1.year - elt2.year)
    this.setState({moviesState:sortedAscending});  
    
  }
  sortDescending = () => {
    console.log("work")
    // const newArray = this.state.state.movie.map(movie => {
    const sortedAscending = this.state.moviesState.sort((elt2, elt1)=>
    elt1.year - elt2.year)
    this.setState({moviesState:sortedAscending});  
  }
  sortBestRate = () => {
    console.log("work rate")
    const sortedBestRate = this.state.moviesState.sort((a,b)=>{
      return b.rate - a.rate
    })
    this.setState({ moviesState: sortedBestRate });
  }

  sortAZ = () => {
    console.log("work")
    const sortedAZ = this.state.moviesState.sort((elt1, elt2)=>{
            const a = elt1.title.toUpperCase()
            const b = elt2.title.toUpperCase()
            if (a > b) {
                return 1
            } else if (a < b) {
                return -1
            } else {
                return 0
            }
    })
    this.setState({moviesState : sortedAZ})
  }

  sortZA = () => {
    console.log("work")
    const sortedZA = this.state.moviesState.sort((elt1, elt2)=>{
      const a = elt1.title.toUpperCase()
            const b = elt2.title.toUpperCase()
            if (a > b) {
                return -1
            } else if (a < b) {
                return 1
            } else {
                return 0
            }
    })
    this.setState({moviesState : sortedZA})
  }
  

  
  render() { 
    return (

    <section>
      <div className="sortierer">
          <button onClick={this.sortAscending}>Sort by Date Ascending</button>
          <button onClick={this.sortDescending}>Sort by Date Descending</button>
          <button onClick={this.sortBestRate}>Best Rate</button>
          <button onClick={this.sortAZ}>A-Z</button>
          <button onClick={this.sortZA}>Z-A</button>
      </div>
      <div className="movies">
          {this.state.moviesState.map((elt, i) =>   
          <DataComponent
            key={i}
            titel = {elt.title}
            year = {elt.year}
            director = {elt.director}
            duration = {elt.duration}
            genre = {elt.genre}
            rate = {elt.rate}
          />
          )}
      </div>
    </section>
      );
  }
}
 
export default DataFunction;

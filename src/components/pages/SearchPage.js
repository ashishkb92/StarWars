import React from 'react';
import axios from 'axios';
import _ from 'lodash';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      searchTerm:"",
      planets: [],
      error : "",
      isLoading : false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleChange(e){
    if (e.target.value.trim()==="") {
      this.setState({
        searchTerm : e.target.value,
        planets:[]
      })
      return ;
    }
    const SEARCH_TERM = e.target.value;
    const URL = `http://swapi.co/api/planets/?search=`;

    this.setState({
      searchTerm : e.target.value,
      isLoading : true,
      planets : [],
      error:""
    })

    axios.get(`${URL+SEARCH_TERM}`).then((resp)=>{
      if (resp.data.results.length===0) {
        this.setState({
          isLoading : false,
          error : "Planet entered by you doesn't exist"
        });
      }else{
        this.setState({
          isLoading : false,
          planets : [...resp.data.results],
          error : ""
        })
      }
    })
  }

  handleLogOut(){
    this.props.onLogOut();
  }

  renderPlanet(planets=[]) {
    let sizeOfFont=50
    return planets.map((planet,i)=>{
      let letSize = sizeOfFont-(i*3);
      return (
        <li className="list-group-item" key={i} style={{fontSize : letSize}}>
          {planet.name}
        </li>
      )
    })
  }

  render(){
    const {isLoading, planets, error} = this.state;
    const searchPlaceHolder = `Enter the planet name`;
    const loader = isLoading ? <div className="loader"></div> : null;
    const sortedPlanets = filteredPlanets(planets);

    function filteredPlanets(planets=[]){
      return [...planets].sort((a,b)=>{
        var x = isNaN(a.population) ? 0 : a.population;
        var y = isNaN(b.population) ? 0 : b.population;
        return y-x;
      })
    }

    return(
      <div>
        <div className = "jumbotron" >
          <div className="input-group">
            <input className="form-control"
              placeholder={searchPlaceHolder}
              value={this.state.searchTerm}
              onChange={this.handleChange}
              />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </span>
         </div>
        </div>
        {loader}
        <ul className="list-group">
          {this.renderPlanet(sortedPlanets)}
        </ul>
        <h4 style={{textAlign:'center',color:'red'}}>{error}</h4>
        <div style={{textAlign:'center'}}>
          <button  className="btn btn-danger" onClick={this.handleLogOut}  >LOGOUT</button>
        </div>
      </div>
    );
  }

}


export default SearchPage;

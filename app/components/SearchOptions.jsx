import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { DateRange, People } from '@material-ui/icons/';
import { Button } from '@material-ui/core/';
import ListingsPage from './ListingsPage.jsx';

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      to: '',
      from: '',
      guests: '',
    }
  }

  submitData() {
    let { from, to, guests, city } = this.props;
    console.log(from, to, guests, city);
    axios.get(`api/hotels/${city.replace(' ', '+')}`)
    .then(res => {
      console.log(res)}
    )
    .catch(err => {
      console.log(err)}
    )
  }

  hitEnter(e) {
    if(e.key == 'Enter') this.submitData();
  }

  render() {
    return (
      <div className="main-search-options" onKeyDown={(e) => this.hitEnter(e)} tabIndex="0">
        <div className="main-search-row">
          <TextField
            label="From"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRange />
                </InputAdornment>
              ),
            }}
            type="date"
            onChange={(e) => this.props.updateFrom(e.target.value)}
            style={{margin: 2}}
          />
          <TextField
            label="To"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRange />
                </InputAdornment>
              ),
            }}
            type="date"
            onChange={(e) => this.props.updateTo(e.target.value)}
            style={{margin: 2}}
          />
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <TextField
            label="Guests"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <People />
                </InputAdornment>
              ),
            }}
            type="number"
            style={{width: "50%", margin: 2}}
            onChange={(e) => this.props.updateGuests(e.target.value)}
          />
          <Button variant="contained" onClick={() => this.submitData()} style={{margin: 20, backgroundColor: "orange", color: "white"}}>
            <Link to='/listings'>Search</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchOptions;

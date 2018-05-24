import React, { Component } from 'react';
import { TextField, SelectField, MenuItem } from 'material-ui';
import axios from 'axios';
import ImageResults from './ImageResults';


class Search extends Component {
constructor(props) {
    super(props)

    this.state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '9054982-02bd0ce469ab37ad2685730c1',
        images: [],
        selecttext: null      
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAmount = this.handleAmount.bind(this)
}


handleChange(event){
    this.setState({
        searchText: event.target.value
    },()=>{

        if(this.state.searchText === ''){
            this.setState({
                images: []
            })
        } else {        
            axios.get( `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res=>this.setState({images: res.data.hits}))
            .catch(err => console.log(err))
        }
    })    
}

handleAmount(event, index, value){
    this.setState({
         amount: value
    },)   
}

render() {
    console.log(this.state.images)
    return (
        <div>
            <TextField                 
                id="text-field-controlled"
                name="searchText"
                value={this.state.searchText}
                onChange={this.handleChange}
                floatingLabelText="Search for Images"
                fullWidth={true}
                style={{ marginLeft: "8px" }}
            />

            <br/>

            <SelectField                
                name="amount"
                floatingLabelText="amount"
                value={this.state.amount}
                onChange={this.handleAmount}
                style={{ marginLeft: "8px" }}
            >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
            </SelectField>
            <br/>            
            {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}           
        </div>

        )
    }
    
}

export default Search;
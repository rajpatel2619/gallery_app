import React from 'react';

import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';

class SearchBar extends React.Component{

  

  state={
      term:''
  }

  onFormSubmit= (event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }


    render(){
        return(
            <div className="bg-dark container">
                {/* <form onSubmit={this.onFormSubmit} className="ui form ">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                        value={this.state.term}  
                        onChange={e=>{this.setState({term:e.target.value})}} 

                        />
                    </div>
                </form> */}
            
  <Navbar bg="dark" variant="dark" >
    {/* <Navbar.Brand href="#home" className="" style={{color:"skyblue"}}>Free Images</Navbar.Brand> */}
   
    <Form inline onSubmit={this.onFormSubmit} >
      <FormControl type="text" placeholder="Search Images" value={this.state.term}  className="mr-sm-2" onChange={e=>{this.setState({term:e.target.value})}}  />
      <Button onClick={this.onFormSubmit} variant="outline-info">Search</Button>
    </Form>
    <br/>
    <br/>
  </Navbar>
            </div>
        );
    }
}
export default SearchBar;
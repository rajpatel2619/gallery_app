import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import unsplash from '../api/unsplash';
import SearchBar from './searchBar';
import ImageList from './imageList';

class App extends React.Component{
    state={
        images:[],
    }
    onSearchSubmit = async (term)=>{
       const response = await unsplash.get('/search/photos',{
            params:{
                query:term,
                per_page:30
            }
        });
        
        this.setState({images:response.data.results});
    }
render(){
    console.log(this.state.images.length);
    return(
        <div className="bg-dark">
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images}  />
        </div>
    );
}
}

export default App;
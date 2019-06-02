import React, { Component } from 'react';


class ListView extends Component {
    state = {
        filtered: this.props.venues
    }

    filterVenues = (event) => { 
        let venueSearch = event.target.value.toUpperCase();
        let venueDetails = this.props.venues;
        let filteredArray = [];
        for (let i = 0; i < venueDetails.length; i++) {
            if (venueDetails[i].name.toUpperCase().includes(venueSearch)) {
            filteredArray.push({id: venueDetails[i].place_id, name: venueDetails[i].name});
            }
        }
        this.setState({
            filtered:filteredArray
        });
        this.props.filterMarker(filteredArray);
    }

    keyPress(target,item,e) {
        if(item.charCode===13){
         this.listItem(target,e)
       }
     }
    

    render (){
        return (
            <div className="list-view">
                <input 
                    id="search-bar"
                    type="text" 
                    placeholder="Search by Name" 
                    onChange={(event) => this.filterVenues(event)}                        
                    className="search-venues" 
                    role="search" 
                    aria-label="text filter" tabIndex="1"
                />
                <ol aria-label="list of venues" tabIndex="1">
                    {this.state.filtered.map((venue) => (
                        <li 
                            tabIndex="1" key={venue.place_id} role="listbox" area-labelledby={`View details for ${venue.name}`} onKeyPress={this.keyPress.bind(venue.name, venue.place_id)} onClick={() => this.props.clickedMarker(venue.name, venue.place_id)} style={{cursor: 'pointer'}}>
                            <h6>{venue.name }</h6>
                            
                        </li>
                    ))}
                </ol>
           </div>
        )
    }

}

export default ListView;
import React from 'react';
import axios from 'axios';


export class MainView extends React.Component {
	constructor() {
		// Call the superclass constructor
			// so React can initialize it
			super();
			this.state = {};
		}
			
  // One of the "hooks" available in a React Component
  componentDidMount() {
    axios.get('')
      .then(response => {
        // Assign the result to the state
        this.setState({
          mapData: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    // If the state isn't initialized, this will throw on runtime
    // before the data is initially loaded
    const { mapData } = this.state;

    // Before the movies have been loaded
    if (!mapData) return <div className="main-view"/>;

    return (
     <div className="main-view">
     { mapData.map(county => (
       <div className="county-card" key={county._id}>{county.co}</div>
     ))}
     </div>
    );
  }

}

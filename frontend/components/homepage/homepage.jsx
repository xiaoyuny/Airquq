import React from 'react';
import ListingIndex from '../listing/listing_index';
import HomepageItems from './homepage_items';
import DotLoading from '../dot_loading';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }

    setTimeout(() => this.setState({loading: false}), 1500);
  }

  componentDidMount() {
    this.props.fetchHomepageListings(['Los Angeles', 'Miami', 'Seattle', 'San Francisco']);
  }

  render() {
    if (this.state.loading || Object.values(this.props.listings).length === 0) {
      return <DotLoading state={this.state} />;
    } else {    
      const listings1 = Object.values(this.props.listings['los Angeles']).slice(0, 4);
      const listings2 = Object.values(this.props.listings['miami']).slice(0, 4);
      const listings3 = Object.values(this.props.listings['seattle']).slice(0, 4)
      const listings4 = Object.values(this.props.listings['san Francisco']).slice(0, 4)
      
      return (
        <div className="homepage-container">
          <div className="homepage-top-part">
            <div className="homepage-text">
              <p id="homepage-title">Explore the world</p>
              <p id="homepage-description">Book your next trip and escape the ordinary</p>
            </div>
            <div className="homepage-item-container">
              <Link to="/search?lat=37.7749&lng=-122.4194"><HomepageItems img={window.images.page3} num="200+" city="San Francisco" description="Browse verified homes with artful style, in a city that wows from beach to land." /></Link>
              <Link to="/search?lat=25.7617&lng=-80.1918"><HomepageItems img={window.images.page1} num="330+" city="Miami" description="Discover Victorian flats, SoMa lofts, and more verified homes in a city where invention meets counterculture." /></Link>
              <Link to="/search?lat=47.6062&lng=-122.3321"> <HomepageItems img={window.images.page2} num="270+" city="Seattle" description="Experience the modern elegance of verified homes in this ancient and ever-evolving metropolis." /></Link>
            </div>
          </div>

          <ListingIndex listings={listings1} city="Los Angeles" />
          <ListingIndex listings={listings2} city="Miami" />
          <ListingIndex listings={listings3} city="Seattle" />
          <ListingIndex listings={listings4} city="San Francisco" />
        </div>
      )
    }
  }
}

export default Homepage;
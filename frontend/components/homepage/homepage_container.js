import { connect } from 'react-redux';
import { fetchHomepageListings } from '../../actions/listing_actions';
import Homepage from './homepage';

const mapStateToProps = state => {
  if (state.entities.listings.homepage) {
    return ({
      listings: state.entities.listings.homepage
    });
  } else {
    return {};
  }
};

const mapDipatchToProps = dispatch => ({
  fetchHomepageListings: cities => dispatch(fetchHomepageListings(cities))
});

export default connect(mapStateToProps, mapDipatchToProps)(Homepage);
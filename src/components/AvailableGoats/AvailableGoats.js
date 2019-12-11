import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class AvailableGoats extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  getGoatCount = () => {
    const { goats } = this.props;
    return goats.filter((g) => !g.isBusy).length;
  }

  render() {
    // let numAvail = 0;
    // this.props.goats.forEach((response) => {
    //   if (response.isBusy === false) {
    //     numAvail += 1;
    //   }
    // });

    return (
      <h4>{this.getGoatCount()} goats available</h4>
      // <p>{numAvail} goats available</p>
    );
  }
}

export default AvailableGoats;

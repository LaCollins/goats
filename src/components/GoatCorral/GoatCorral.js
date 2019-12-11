import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class goatCorral extends React.Component {
  static propTypes = {
    butts: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
    getGoat: PropTypes.func,
  }

  render() {
    const myGoats = this.props.butts;

    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat} freeGoat={this.props.freeGoat} getGoat={this.props.getGoat} />);

    return (
      <div className="goatCorral row d-flex justify-content-center">
        {goatCards}
      </div>
    );
  }
}

export default goatCorral;

import React from 'react';
import Goat from '../Goat/Goat';

class goatCorral extends React.Component {
  render() {
    const myGoats = this.props.butts;

    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat}/>);

    return (
      <div className="goatCorral row d-flex justify-content-center">
        {goatCards}
      </div>
    );
  }
}

export default goatCorral;

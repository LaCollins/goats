import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
    getGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  getGoatEvent = (e) => {
    const { getGoat, goat } = this.props;
    e.preventDefault();
    getGoat(goat.id);
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card col-3 m-3">
        <img src={goat.imgUrl} className="card-img-top" alt={goat.name}/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
        </div>
        <div className="card-footer">
          <div onClick={this.freeGoatEvent} className="btn btn-success">Free Me</div>
        <div onClick={this.getGoatEvent} className="btn btn-info">Pick Me</div></div>
      </div>
    );
  }
}

export default Goat;

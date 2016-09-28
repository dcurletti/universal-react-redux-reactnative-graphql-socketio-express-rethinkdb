import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {CounterButton, GithubButton} from 'components';
import Helmet from 'react-helmet';
import {asyncConnect} from 'redux-async-connect';
import {loadSymbol} from 'redux/modules/widgets';


@connect(
  state => ({
    widgets: state.widgets
  }),
  {loadSymbol}
)
export default class Home extends Component {
  text = null;

  _onSubmit(e) {
    e.preventDefault();
    this.props.loadSymbol(this.text);
  }

  render() {
    const styles = require('./Home.scss');
    return (
      <div>
        <Helmet title="Home"/>
        Home
        <form onSubmit={(e) => this._onSubmit(e)}>
          <div>
            Stock Ticker Here: <input type="text" onChange={(e) => this.text = e.target.value}/>
          </div>
        </form>
      </div>
    );
  }
}

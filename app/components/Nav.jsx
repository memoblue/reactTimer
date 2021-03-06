var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar nav">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><IndexLink activeClassName="active" to="/">Timer</IndexLink></li>
          <li><Link activeClassName="active" to="/countdown">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Fork me on <a target="_blank" href="https://github.com/memoblue/reactTimer">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;

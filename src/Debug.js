import React from 'react';
import ACTIONS from './redux/action';
import { connect } from 'react-redux';

function Debug({ log, addLog }) {
  const list = log.map(i => <li>{i}</li>);
  return (
    <div>
      <ol>
        <b>{list}</b>
      </ol>
      <button onClick={() => addLog(new Date().toLocaleString('en-US'))}>
        LOG TIME
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = dispatch => ({
  addLog: item => dispatch(ACTIONS.logAction(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Debug);

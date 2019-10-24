import React from 'react';
import { logActionsFlow } from './redux/action';
import { connect } from 'react-redux';

function Debug({ log, addLog }) {
  const list = log.map((l, i) => <li key={i}>{l}</li>);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const handleWindowMessage = message => {
      const { data } = message;
      if (typeof data === 'string' && data.startsWith('LOG:')) {
        console.log(data);
        const logMsg = data.split('LOG:')[1];
        addLog(logMsg);
        setShow(false);
      }
    };

    window.addEventListener('message', handleWindowMessage);
  }, []);

  return (
    <div>
      <ol>
        <b>{list}</b>
      </ol>
      {show && <iframe title="iframe" id="iframe" src="/iframe" />}
    </div>
  );
}

const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = dispatch => ({
  addLog: item => dispatch(logActionsFlow(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Debug);

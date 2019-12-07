import React from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../store';
import Examples from '../components/examples';
import GridWrapper from '../components/GridWrapper';


class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  render() {
    return (
      <>
        <Examples />

        <GridWrapper></GridWrapper>
      </>
    );
  }
}

export default connect()(Index);

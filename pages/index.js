import React from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../store';
import Examples from '../components/examples';
import GridWrapper from '../components/GridWrapper';
import Home from '../components/home'
import { withRouter } from 'next/router'
import '../styles/styles.scss';

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
  // const { query } = this.props.router.query;

    return (
      <>
        {/*{*/}
        {/* JSON.stringify(this.props)*/}
        {/*}*/}
        {/*<Examples />*/}
        {/*<GridWrapper></GridWrapper>*/}

        {/*<Home query={this.props.router.query}/>*/}
        <Home/>
      </>
    );
  }
}

// export default connect()(withRouter(Index));
export default connect()(Index);

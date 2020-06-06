import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import logo from '../assets/images/logo.png';
import { logout } from '../store/actions/auth';
import { withRouter , Link } from 'react-router-dom';
import Image from 'material-ui-image';
import LinearProgress from '@material-ui/core/LinearProgress';

console.log(withRouter);
export class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  renderProgressBar = () => this.props.isFetching ? (<LinearProgress />) : (<span></span>)

  render() {

    return (
      <div>
        <div className="appbarwrapper">
          <AppBar
            position="fixed"
            color="default"
          >
            {this.renderProgressBar()}
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box style={{ display: 'flex' }}>
                <Box pt={0.5}>
                  <Link to="/">
                    <Image
                      src={logo}
                      color="inherit"
                      style={{ height: 40, width: 165, paddingTop: 0, flex: 1 }}
                      imageStyle={{ height: 40, width: 165 }}
                    />
                  </Link>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isFetching: state.auth.isFetching
});

const mapDispatchToProps = (dispatch, props) => ({
  startLogout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
import React from "react";
import "../css/app.css";
import { Route, Switch, withRouter } from 'react-router-dom';
import GameContainer from "./GameContainer";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import GameRules from "./GameRules";
import SelectRoom from "./SelectRoom";
import WaitingAdmin from "./WaitingAdmin";
import GameBoard from "./game/GameBoard";

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          userInfo: null
      };
  }

/*  componentDidMount() {
      this.getUser();
  }*/

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} userInfo={this.state.userInfo} />
          <Route exact path="/success" component={GameContainer} />
          <Route exact path="/rules" component={GameRules} />
          <Route exact path="/select-room" component={SelectRoom}/>
          <Route exact path="/waiting-admin" component={WaitingAdmin} /> 
          <Route exact path="/game" component={GameBoard} />
        </Switch>
      </div>
    )
    ;
  }

  getUser = () => {    
        fetch('/api/whoami')
        .then(res => res.json())
        .then(
            userObj => {
                if (userObj._id !== undefined) {
                    this.setState({ 
                        userInfo: userObj
                    });
                } else {
                    this.setState({ 
                        userInfo: null
                    });
                }
            }
        );
    }
}

export default withRouter(App);
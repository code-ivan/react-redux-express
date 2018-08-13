// @flow
import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import Nav from "../../Components/Nav/Nav";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      list: []
    };
  }

  render() {
    const styles = require("./Home.scss");

    return (
      <main>
        {/* Use Helmet for all meta tag */}
        <Helmet title="Template">
          <meta name="description" content="Tempalte" />
        </Helmet>
        <header className={styles.header}>
          <div className="container">
            <div className={styles.contentHeader + " text-center"}>
              <h1>Template</h1>
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">Lorem ipsum</div>
              </div>
            </div>
          </div>
        </header>
      </main>
    );
  }
}

Home.displayName = "Home";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import React from "react";
import { connect } from "react-redux";
import { isLoggedIn } from "./store/actions/auth";
import ImageSlider from "./components/SlideShow";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IApp } from "./Interfaces/UserInterface";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Contact from "./components/contact";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./styles/styles.css";

const Container = styled.div``;

export class App extends React.Component<IApp> {
  componentDidMount() {
    this.props.logIn();
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Container>
          <Header />
          <ImageSlider />
          <Services />
          <AboutUs />
          {/* <Footer /> */}
          <Contact />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    logIn: () => dispatch(isLoggedIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

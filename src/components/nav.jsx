import React from 'react';
import { withRouter } from "react-router-dom";
import resume from "../assets/resume.pdf";
import "./nav.css";
import $ from "jquery";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.showing = false;
    this.handleSelection = this.handleSelection.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    if(this.showing) {
      // debugger

      $(".nav-container").removeClass("slideInLeft");
      $(".nav-container").addClass("slideOutLeft");
      setTimeout(()=> {
        $(".nav-container").css("display", "none");

      }, 500);
    } else {
      $(".nav-container").css("display", "grid");
      $(".nav-container").removeClass("slideOutLeft");
      $(".nav-container").addClass("slideInLeft");

    }
    this.showing = !this.showing;
  }

  handleSelection(event) {
    if(event.target.innerText) {
      let nextPage = event.target.innerText.toLowerCase();
      if(nextPage !== "resume") {
        if(nextPage === "about") {
          this.props.history.push(`/`);
        } else {
          this.props.history.push(`/${nextPage}`);
        }
      }
    }
    $(".nav-container").css("display", "none");
    this.showing = false;
  }

  // <div> MENU </div>
  render () {
    return(
      <div id="navBar-container">
        <div className="menu" >
          <i className="fas fa fa-bars menu-bars" onClick={this.toggleNav}></i>
        </div>
        <div>
          <div className="nav-container">
            <div className="close-nav" ><div onClick={this.toggleNav}>x</div></div>
          <ul onClick={this.handleSelection} className="nav-ul">
            <li className="about-nav">ABOUT</li>
            <li className="projects-nav">PROJECTS</li>
            <li className="skills-nav">
              SKILLS
            </li>
            <li className="contact-nav">CONTACT</li>

              <a href={resume} className="resume-link-nav resume-nav" target="_blank">RESUME</a>
          </ul>
        </div>



        </div>



      </div>
    );
  }
}

export default withRouter(NavBar);

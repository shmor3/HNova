import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import SocialLinks from "./sociallinks";
import SectionTitle from "./sectiontitle";
import "../style/subscribe.less";
import { PaperPlane, Mapmarker, Mobile, Envelope, Loading } from "./icons";

export default class Subscribe extends React.Component {
  state = {
    email: null,
  };

  _handleChange = (e) => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    });
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  };

  _handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", this.state);

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`);

        if (result !== "success") {
          throw msg;
        }
        alert(msg);
      })
      .catch((err) => {
        console.log("err", err);
        alert(err);
      });
  };

  render() {
    return (
      <section id="subscribe" className="container">
        <div className="section-title">
          <SectionTitle title="Subscribe" />
        </div>
        <div className="mailForm">
          <h4>Join our mailing list!</h4>
          <p>stay in the loop on new releases</p>
          <div>
            <form onSubmit={this._handleSubmit}>
              <input
                className="emailField"
                type="email"
                onChange={this._handleChange}
                placeholder="email"
                name="email"
                required
              />
              <button
                className={
                  "btn" + (this.state.submitDisabled ? " disabled" : "")
                }
                onClick={this.handleSubmit}
                id="submit"
                ref={(c) => (this.btn = c)}
              >
                SEND{" "}
                <span
                  className="icon paper-plane"
                  style={{
                    display: this.state.submitDisabled
                      ? "none"
                      : "inline-block",
                  }}
                >
                  <PaperPlane />
                </span>
                <span
                  className="icon loading"
                  style={{
                    display: !this.state.submitDisabled
                      ? "none"
                      : "inline-block",
                  }}
                >
                  <Loading />
                </span>
              </button>
            </form>
            <ul>
            <li>
              <SocialLinks />
            </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

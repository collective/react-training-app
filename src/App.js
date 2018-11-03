import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <ul>
        <li>
          <h2>What does the Plone Foundation do?</h2>
          <p>
            The mission of the Plone Foundation is to protect and promote Plone.
            The Foundation provides marketing assistance, awareness, and
            evangelism assistance to the Plone community. The Foundation also
            assists with development funding and coordination of funding for
            large feature implementations. In this way, our role is similar to
            the role of the Apache Software Foundation and its relationship with
            the Apache Project.
          </p>
        </li>
        <li>
          <h2>Why does Plone need a Foundation?</h2>
          <p>
            Plone has reached critical mass, with enterprise implementations and
            worldwide usage. The Foundation is able to speak for Plone, and
            provide strong and consistent advocacy for both the project and the
            community. The Plone Foundation also helps ensure a level playing
            field, to preserve what is good about Plone as new participants
            arrive.
          </p>
        </li>
      </ul>
    );
  }
}

export default App;

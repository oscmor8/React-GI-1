import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleArray: [
        {
          name: "Oscar Morado",
          number: "704-281-9158",
          dateOfBirth: "September 30, 2000",
        },
        {
          name: "Alex Tejo",
          number: "980-222-222",
          dateOfBirth: "June 5, 1999",
        },
        {
          name: "Tony Hawk",
          number: "704-123-4567",
          dateOfBirth: "May 12, 1968",
        },
      ],
    };
  }

  render() {
    const { peopleArray } = this.state;

    return (
      <div>
        {peopleArray.map((person) => (
          <div>
            <h1>{person.name}</h1>
            <p>{person.number}</p>
            <p>{person.dateOfBirth}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Personal;

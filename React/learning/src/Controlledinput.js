import { useState } from "react";

const Controlledinput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const Handler = (event) => {
    event.preventDefault();
    if (name && email) {
      const person = { name, email };
      setPeople([...people, person]);
      setEmail("");
      setName("");
    }
  };

  return (
    <>
      <article>
        <h1>Forms</h1>
        <form onSubmit={Handler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="name"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        <div>
          {people.map((persons) => (
            <div key={persons.email}>
              <h1>{persons.name}</h1>
              <h1>{persons.email}</h1>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Controlledinput;

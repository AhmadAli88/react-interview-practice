import React from "react";

const ContactForm = () => {
  const [IsSubmitted, setIsSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  console.log("name", name);

  const [phone, setPhone] = React.useState("");
  console.log("phone", phone);
  const [feedback, setFeedback] = React.useState("");
  console.log("feedback", feedback);
  function handleSubmit(e) {
    debugger;
    e.preventDefault();
    console.log("Form submitted with values:", { name, phone, feedback });
    setIsSubmitted(true);
    const finalData = {
      name,
      phone,
      feedback,
    };
    console.log("Final Data:", finalData);
  }
  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={name}
            type="text"
            id=""
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            value={phone}
            name="phone"
            id=""
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            cols={50}
            type="text"
            name="feedback"
            value={feedback}
            id=""
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {IsSubmitted && (
            <tr>
              <td>{name}</td>
              <td>{phone}</td>
              <td>{feedback}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactForm;

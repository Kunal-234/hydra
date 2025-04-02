import { useState } from "react";

const ContactUs = () => {
  // Input States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [textArea, setTextArea] = useState("");

  //set States for error messages
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    textArea: "",
  });

  // Update Error Messages
  const updateErrorState = (fieldName, message) => {
    setErrorMessage((prevState) => ({
      ...prevState,
      [fieldName]: message,
    }));
  };

  //Validating Input Fields
  const validateInput = (data) => {
    const { value, name } = data;
    const phonePattern = /^\d{10}$/;
    if (name === "firstName") {
      if (value.trim() === "") {
        updateErrorState(name, "First Name is required.");
      } else if (value.length < 3) {
        updateErrorState(name, "First Name must be greater than 3 characters.");
      } else {
        updateErrorState(name, "");
      }
    } else if (name === "lastName") {
      if (value.trim() === "") {
        updateErrorState(name, "Last Name is required.");
      } else if (value.length < 3) {
        updateErrorState(name, "Last Name must be greater than 3 characters.");
      } else {
        updateErrorState(name, "");
      }
    } else if (name === "email") {
      if (value.trim() === "") {
        updateErrorState(name, "Email is required.");
      } else {
        updateErrorState(name, "");
      }
    } else if (name === "phoneNumber") {
      if (!phonePattern.test(value.trim())) {
        updateErrorState(name, "Please enter a valid 10-digit phone number.");
      } else {
        updateErrorState(name, "");
      }
    } else if (name === "subject") {
      if (value.trim() === "") {
        updateErrorState(name, "Subject Title is Required");
      } else if (value.length < 5) {
        updateErrorState(name, "Subject Title must be more than 5 characters ");
      } else {
        updateErrorState(name, "");
      }
    } else if (name === "textArea") {
      if (value.trim() === "") {
        updateErrorState(name, "Message is Required");
      } else if (value.length < 10) {
        updateErrorState(name, "Message must be more than 10 characters ");
      } else {
        updateErrorState(name, "");
      }
    }
  };

  //Handle Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(errorMessage).some((message) => message !== "") ||
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !subject ||
      !textArea
    ) {
      alert("Invalid Credentials ❌");
      return;
    }
    alert("Form Submitted");
  };

  return (
    <section className="max-width padding-x pt-10 pb-20" id="contactus">
      <div className="mx-auto items-center w-full flex flex-col gradient-circle p-10 rounded-[60px]">
        <h1 className="h1-style">Join Hydra</h1>
        <div className="line-contact" />
        <h2 className="text-2xl font-extralight text-center">
          Lets Build Your VR Experience{" "}
        </h2>
        <form className="form-field" onSubmit={handleSubmit}>
          <div className="form-input-container">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  validateInput(e.target);
                }}
                placeholder="First Name"
                className="form-input "
              />
              {errorMessage.firstName && (
                <p className="text-red-500 text-xs ml-2 pt-1">
                  {errorMessage.firstName}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  validateInput(e.target);
                }}
                placeholder="Last Name"
                className="form-input"
              />
              {errorMessage.lastName && (
                <p className="text-red-500 text-xs ml-2 pt-1">
                  {errorMessage.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="form-input-container">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateInput(e.target);
                }}
                placeholder="Email"
                className="form-input"
              />
              {errorMessage.email && (
                <p className="text-red-500 text-xs ml-2 pt-1">
                  {errorMessage.email}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  validateInput(e.target);
                }}
                placeholder="Phone Number (+1)"
                className="form-input"
              />
              {errorMessage.phoneNumber && (
                <p className="text-red-500 text-xs ml-2 pt-1">
                  {errorMessage.phoneNumber}
                </p>
              )}
            </div>
          </div>
          <div className="subject-input">
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  validateInput(e.target);
                }}
                placeholder="Subject"
                className="subject-field"
              />
              {errorMessage.subject && (
                <p className="text-red-500 text-xs ml-2 pt-1">
                  {errorMessage.subject}
                </p>
              )}
            </div>
          </div>
          <div className="textarea-input">
            <textarea
              id="textArea"
              name="textArea"
              value={textArea}
              onChange={(e) => {
                setTextArea(e.target.value);
                validateInput(e.target);
              }}
              rows="10"
              placeholder="Tell Us Something"
              className="text-area"
            />
            {errorMessage.textArea && (
              <p className="text-red-500 text-xs ml-2 pt-1">
                {errorMessage.textArea}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="button-gradient button-hover mx-auto uppercase"
          >
            send to hydra
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

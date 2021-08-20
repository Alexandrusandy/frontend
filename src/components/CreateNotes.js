import React, { useState } from 'react';
// import axios from 'axios';

const CreateNotes = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    gender: '',
    system: '',
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  // function handleClick(event) {
  //   event.preventDefault();
  //   alert('Info submited check out Notes page');
  //   console.log(input);
  //   const newNote = {
  //     name: input.name,
  //     email: input.email,
  //     gender: input.gender,
  //     system: input.system,
  //   };

  //   axios.post('https://secret-ravine-89595.herokuapp.com/create', newNote);
  // }

  return (
    <div className="container">
      <h1>Introduceti </h1>
      <form
        action="https://formsubmit.co/remusbalan9595@Gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false"></input>
        <input
          type="hidden"
          name="_next"
          value="https://dataentry-alex.netlify.app/create"
        ></input>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            required
            name="name"
            value={input.name}
            className="form-control"
            placeholder="Name"
            autoComplete="off"
          ></textarea>
        </div>

        <div className="form-group">
          <textarea
            onChange={handleChange}
            required
            type="email"
            id="email"
            name="email"
            value={input.email}
            className="form-control"
            placeholder="email"
            autoComplete="off"
          ></textarea>
        </div>
        <div className="form-group">
          Male
          <input
            required
            onChange={handleChange}
            type="radio"
            name="gender"
            value="man"
          ></input>
          Female
          <input
            required
            onChange={handleChange}
            type="radio"
            name="gender"
            value="woman"
          ></input>
        </div>

        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">
            Operation Systems used:
          </label>
          <select
            class="form-select"
            onChange={handleChange}
            id="inputGroupSelect01"
            name="system"
          >
            <option selected>Choose...</option>

            <option onChange={handleChange} name="system" value="ios">
              Ios
            </option>
            <option onChange={handleChange} name="system" value="android">
              android
            </option>
            <option onChange={handleChange} name="system" value="windows">
              Windows
            </option>
          </select>
        </div>

        <button
          // type='submit'
          className="btn btn btn-info"
          //  onclick={handleClick}
        >
          Send Data
        </button>
      </form>
    </div>
  );
};

export default CreateNotes;

import React from "react";
import "../styles/Form.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

const Form = (props) => {
  return (

    <form className="form" onSubmit={props.submit}>
      <input
        className="form__input"
        value={props.value}
        onChange={props.change}
        type="text"
        placeholder="Search..."
      />
      <button className="form__button"><FontAwesomeIcon icon="search" /></button>
    </form>
  );
};

export default Form;

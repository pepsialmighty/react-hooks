import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TodoForm = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  //handle change in the input
  function handleValueChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  //handle to send the data back to App comp
  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    //truyền mấy cai field vào một object để dễ mở rộng chứ ko nên truyền thẳng foeld vào onSubmit
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    //reset input
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={handleValueChange} />
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

export default TodoForm;

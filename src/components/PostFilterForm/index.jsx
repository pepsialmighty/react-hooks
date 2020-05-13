import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

const PostFilterForm = (props) => {
  const { onSubmit } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null); // tạo ra một object lưu trữ giá trị gần nhất

  function handleSearchTermChange(e) {
    const value = e.target.value; // không đặt biến ngoài thì e bị release quá sớm, dẫn đến lỗi
    setSearchTerm(value);
    if (!onSubmit) return;

    // nếu vẫn còn gõ thì xóa đi, khi nào dừng thì mới tính
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    //debounce
    //chờ tiếp 300ms
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }

  return (
    <form>
      <input type='text' value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
};

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

export default PostFilterForm;

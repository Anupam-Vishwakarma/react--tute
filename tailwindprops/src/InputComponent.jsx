function InputComponent({ onNameChange }) {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      onChange={(e) => onNameChange(e.target.value)}
    />
  );
}

export default InputComponent;

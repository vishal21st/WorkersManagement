import React from 'react';

class InputField extends React.Component {
  render() {
    const { value, error, inputType, placeholder, inputRef, onChange, name } = this.props
    return (
      <div className="form-group">
        <input  ref={inputRef} 
                name={name}
                type={inputType} 
                className={`form-control ${error ? 'is-invalid' : ''}` }
                placeholder={placeholder}
                ref={inputRef}
                onChange={onChange}/>
        <p className="invalid-feedback">
          {error} 
        </p>
      </div>
    );
  }
}


export default InputField;

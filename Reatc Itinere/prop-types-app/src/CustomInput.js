import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomInput extends Component {
  constructor(props) {
    super(props);
  }

  getLabel() {
    if (this.props.label.length > 0) {
      return <div className="input-group-addon">{this.props.label}</div>;
    } else {
      return <div />;
    }
  }

  render() {
    let label = this.getLabel();
    return (
      <div className="input-group">
        {label}
        <input
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          style={this.props.style}
          className="form-control"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
CustomInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CustomInput.defaultProps = {
  type: "text",
  label: "",
  onChange: () => {},
};

export default CustomInput;

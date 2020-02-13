import React from "react";
import "./style.scss";

const Input = props => {
    const iconClasses = {
        name: "fas fa-user",
        email: "fas fa-envelope",
        password: "fas fa-lock"
    };

    return (
        <div className="input-field">
            <i className={iconClasses[props.type]}></i>
            <input
                placeholder={props.placeholder}
                type={props.type}
                id={props.id}
                pattern={props.pattern}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
};

export default Input;

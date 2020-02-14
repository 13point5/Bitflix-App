import React from "react";
import "./style.scss";

const Input = props => {
    const iconClasses = {
        name: "fas fa-user",
        email: "fas fa-envelope",
        password: "fas fa-lock",
        number: null
    };

    return (
        <div className="input-field">
            {iconClasses[props.type] ? (
                <i className={iconClasses[props.type]}></i>
            ) : null}
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

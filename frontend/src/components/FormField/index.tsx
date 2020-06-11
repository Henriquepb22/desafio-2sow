import React from "react";

type FormFieldProps = {
    name: string;
    label: string;
    type: string;
    placeholder: string;
};

const FormField: React.FC<FormFieldProps> = ({
    name,
    label,
    type,
    placeholder,
}) => {
    return (
        <fieldset>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} placeholder={placeholder} required />
        </fieldset>
    );
};

export default FormField;

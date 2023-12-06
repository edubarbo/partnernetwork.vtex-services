import React from 'react';
export interface ISelectProps {
    disabled?: boolean;
    value?: ISelectOption | ISelectOption[] | string;
    multi?: boolean;
    placeholder?: string | React.ReactElement;
    errorMessage?: string;
    options: ISelectOption[];
    onChange?: (value: ISelectOption | ISelectOption[]) => void;
}
declare const Select: React.FC<ISelectProps>;
export default Select;

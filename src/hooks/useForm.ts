import React, { useMemo, useState } from 'react';
import { FormValidations, FormValues } from '../shared/models/types/formTypes';


const setTouchecValues = <T extends FormValues>(values: T) => {
    return Object.keys(values).reduce((prev, curr) => {
        return {...prev, [curr]: false}
    }, values);
}

export const useForm = <T extends FormValues>( initialForm: T, formValidations: FormValidations ) => {
  
    const [ formState, setFormState ] = useState<T>( initialForm );

    const formValidation = useMemo<T>(() => {
        return Object.keys(formValidations).reduce((prev: any, curr: string) => {
            const [fn, errorMessage] = formValidations[curr];
            const newValue = !fn(formState[curr]) ? {[curr]: errorMessage} : {[curr]: null};
            if (prev) {
                return {...prev, ...newValue};
            } else {
                return {...newValue};
            }
        }, {});
    }, [formState]);

    const [touched, setTouched] = useState(setTouchecValues(initialForm));

    const valid = useMemo<boolean>(() => {
        return Object.values(formValidation).every((value: string) => value === null);
    }, [formValidation]);

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onInputTouch = (key: string) => {
        setTouched({
            ...touched,
            [key]: true
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        formValidation,
        valid,
        onInputTouch,
        touched
    }
}
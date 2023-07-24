import React, { useState } from 'react';

type FormValues = {
  [k: string]: string
}

export const useForm = <T extends FormValues>( initialForm: T ) => {
  
    const [ formState, setFormState ] = useState<T>( initialForm );

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
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
    }
}
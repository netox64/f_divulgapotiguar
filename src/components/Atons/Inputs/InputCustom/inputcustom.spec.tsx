import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputCustom } from '.';
import { useForm, FormProvider } from 'react-hook-form';

describe('InputCustom', () => {
    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
        const methods = useForm();
        return <FormProvider {...methods}>{children}</FormProvider>;
    };

    test('should render the input with label', () => {
        render(
            <Wrapper>
                <InputCustom name="email" label="Email" type="email" />
            </Wrapper>
        );

        const inputElement = screen.getByLabelText(/Email/i);
        expect(inputElement).toBeInTheDocument();
    });
});

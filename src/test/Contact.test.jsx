import { describe, test, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../pages/contact/Contact';
import userEvent from '@testing-library/user-event';

afterEach(() => {
    cleanup();
});

describe('Tests for <Contact />', () => {

    test('Render <Contact />', () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        const inputName = screen.getByRole("name");
        const inputEmail = screen.getByRole("email");
        const inputMessage = screen.getByRole("message");
        const buttonSubmit = screen.getByRole("button");

        expect(inputName).toBeDefined();
        expect(inputEmail).toBeDefined();
        expect(inputMessage).toBeDefined();
        expect(buttonSubmit).toBeDefined();

        expect(inputName.getAttribute('type')).toBe('text');
        expect(inputEmail.getAttribute('type')).toBe('email');
        expect(buttonSubmit.getAttribute('type')).toBe('submit');
    });

    test('Should let you write in the form and submit', async () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        );

        const user = userEvent.setup()
        const inputName = screen.getByRole("name");
        const inputEmail = screen.getByRole("email");
        const inputMessage = screen.getByRole("message");
        const buttonSubmit = screen.getByRole("button");

        await user.type(inputName, 'Isabela Montoya');
        await user.type(inputEmail, 'isa@gmail.com');
        await user.type(inputMessage, 'This is a test message.');
        user.click(buttonSubmit);

        expect(inputName.value).toBe('Isabela Montoya');
        expect(inputEmail.value).toBe('isa@gmail.com');
        expect(inputMessage.value).toBe('This is a test message.');
        
    });
});

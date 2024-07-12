import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import UILikeBtn from '../components/UILikeBtn';
import TestWrapper from '../TestWrapper';

const defaults = {
    title: "+1",
    counter: 10,
    icon: faPencil,
    onClick: jest.fn(),
};

describe('UILikeBtn', function() {
    it('should render component', async function() {
        render(<UILikeBtn {...defaults} />, { wrapper: TestWrapper});
        
        const button = screen.getByTestId('counter-button');
        expect(button).toBeInTheDocument();
    });

    it('should show title on button', async function() {
        render(<UILikeBtn {...defaults} />, { wrapper: TestWrapper});
        
        const button = screen.getByTitle('+1');
        expect(button).toBeInTheDocument();
    });

    it('should show counter', async function() {
        render(<UILikeBtn {...defaults} />, { wrapper: TestWrapper});
        
        const button = screen.getByTestId('counter');
        expect(button).toHaveTextContent("10");
    });

    it('should execute click action', async function() {
        render(<UILikeBtn {...defaults} />, { wrapper: TestWrapper});
        
        const button = screen.getByTestId('counter-button');
        fireEvent.click(button);

        expect(defaults.onClick).toHaveBeenCalled();
    });
});

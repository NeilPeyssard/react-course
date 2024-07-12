import React from 'react';
import { render, screen } from '@testing-library/react';
import Rule from '../components/Rule';
import '@testing-library/jest-dom'
import TestWrapper from '../TestWrapper';

const defaults = {
    id: 1,
    title: "This is my favorite rule",
    description: "Lorem ipsum dolor sit amet",
    dislikes: 0,
    likes: 0,
    tags: [],
};

describe('Rule', function() {
    it('should render component', async function() {
        render(<Rule {...defaults} />, { wrapper: TestWrapper});
        
        const rule = screen.getByTestId('rule');
        expect(rule).toBeInTheDocument();
    });

    it('should show title', async function() {
        render(<Rule {...defaults} />, { wrapper: TestWrapper});
        
        const title = screen.getByText('This is my favorite rule');
        expect(title).toBeInTheDocument();
    });

    it('should show description', async function() {
        render(<Rule {...defaults} />, { wrapper: TestWrapper});
        
        const description = screen.getByText('Lorem ipsum dolor sit amet');
        expect(description).toBeInTheDocument();
    });
});

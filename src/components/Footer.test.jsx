import {fireEvent, render, waitFor} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
    //1. Check kalau Footer beneran ke render
    it('should render correctly', () => {
        const renderedFooter = render(<Footer />);

        expect(renderedFooter).toBeDefined();
    });

    //2. Check behavior props Footer
    it('should render props correctly', async () => {
        const renderedFooter = render(<Footer message="Hello World" />);
        const propsMessage = await renderedFooter.findByTestId('props-message');

        expect(propsMessage).toHaveTextContent('Hello World');
    });

    //3. Check function button Footer
    it('should render button correctly', async () => {
        const renderedFooter = render(<Footer message="Footer message" />);
        const stateMessage = await renderedFooter.findByTestId('state-message');

        expect(stateMessage).toHaveTextContent('Hello React');

        const btn = await renderedFooter.findByTestId('button-footer');
        fireEvent.click(btn);

        await waitFor(() => {
            expect(stateMessage).toHaveTextContent('Hello React');
        });
    });
});
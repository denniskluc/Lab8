import { TestScheduler } from '@jest/core';
import { pushToHistory } from '../scripts/router.js';

/**
 * @jest-environment jsdom
 */

describe('test pushToHistory', () => {
    test('settings case', () => {
        const currState = pushToHistory('settings', 0);
        expect(currState.length).toBe(window.history.length);
        expect(currState.state.page).toBe('settings');
    });

    test('entry case', () => {
        const currState = pushToHistory('entry', 3);
        expect(currState.length).toBe(window.history.length);
        expect(currState.state.page).toBe('entry3');
    });

    test('default case', () => {
        const currState = pushToHistory('', 0);
        expect(currState.length).toBe(window.history.length);
        expect(currState.state.page).toBe(undefined);
    });
});


import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const source = page.match(/function getRedirect\(search\) \{[\s\S]*?\n        \}/)?.[0];

if (!source) {
    throw new Error('Could not find getRedirect in index.html');
}

const { getRedirect } = vm.runInNewContext(`${source}; ({ getRedirect })`, {
    URLSearchParams,
});

test('keeps encoded spaces in r redirect URLs', () => {
    assert.equal(
        getRedirect('?r=things:///add?title=get%20oat%20milk'),
        'things:///add?title=get oat milk',
    );
});

test('keeps literal spaces in r redirect URLs', () => {
    assert.equal(
        getRedirect('?r=things:///add?title=get oat milk'),
        'things:///add?title=get oat milk',
    );
});

test('keeps unencoded nested query parameters in r redirect URLs', () => {
    assert.equal(
        getRedirect('?r=obsidian://open?vault=usmanity&file=7%20-%20finance%2F704%20-%20monthly%20check%20up'),
        'obsidian://open?vault=usmanity&file=7 - finance/704 - monthly check up',
    );
});

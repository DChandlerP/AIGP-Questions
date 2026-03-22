import { describe, it, expect } from 'vitest';
import { formatTime } from './utils.js';

describe('formatTime', () => {
  it('formats exactly 0 seconds', () => {
    expect(formatTime(0)).toBe('00:00');
  });

  it('formats less than a minute correctly', () => {
    expect(formatTime(45)).toBe('00:45');
    expect(formatTime(5)).toBe('00:05');
  });

  it('formats exact minutes correctly', () => {
    expect(formatTime(60)).toBe('01:00');
    expect(formatTime(120)).toBe('02:00');
  });

  it('formats minutes and seconds correctly', () => {
    expect(formatTime(65)).toBe('01:05');
    expect(formatTime(130)).toBe('02:10');
  });

  it('handles negative numbers as positive duration', () => {
    expect(formatTime(-45)).toBe('00:45');
  });
});

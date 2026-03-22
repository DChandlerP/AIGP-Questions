/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

// 1. Mock the specific JSON file imported by main.js
const mockQuestions = {
  questions: [
    {
      id: 1,
      topic: "Topic 1",
      question: "E2E Test Question 1?",
      options: ["Wrong 1", "Correct 1", "Wrong 2", "Wrong 3"],
      correct_index: 1,
      reasoning: "Reasoning for E2E Q1"
    },
    {
      id: 2,
      topic: "Topic 2",
      question: "E2E Test Question 2?",
      options: ["Correct 2", "Wrong 1", "Wrong 2", "Wrong 3"],
      correct_index: 0,
      reasoning: "Reasoning for E2E Q2"
    }
  ]
};

vi.mock('./aigp_questions.json', () => ({
  default: mockQuestions
}));

describe('E2E Quiz Playthrough', () => {
  let app;

  beforeEach(async () => {
    // Reset document
    document.body.innerHTML = '<div id="app"></div>';
    app = document.getElementById('app');

    // Mock scrollTo to avoid jsdom warning
    window.scrollTo = vi.fn();
    
    // Clear module cache so main.js executes fresh
    vi.resetModules();
    
    // Import main.js dynamically to trigger initialization
    await import('./main.js');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const getQuestionObject = (questionText) => {
    return mockQuestions.questions.find(q => questionText.includes(q.question));
  };

  it('runs through a full quiz, handling correct/incorrect states, and shows the results screen', async () => {
    // --- START SCREEN ---
    expect(app.innerHTML).toContain('AIGP Practice Quiz');
    expect(app.innerHTML).toContain('2 questions');

    const startBtn = document.getElementById('start-btn');
    expect(startBtn).not.toBeNull();
    startBtn.click();

    // --- QUESTION 1 ---
    let h2 = document.querySelector('h2');
    expect(h2).not.toBeNull();
    let currentQ = getQuestionObject(h2.textContent.trim());
    expect(currentQ).toBeDefined();

    let optionBtns = document.querySelectorAll('.option-btn');
    expect(optionBtns.length).toBe(4);
    
    // Simulate Correct Answer
    let correctBtn = Array.from(optionBtns).find(btn => parseInt(btn.dataset.index) === currentQ.correct_index);
    correctBtn.click();

    // Assert: Correct button turns green
    expect(correctBtn.classList.contains('bg-emerald-900/30')).toBe(true);
    
    // Assert: Feedback is displayed correctly
    let feedbackText = document.getElementById('feedback-text');
    expect(feedbackText.textContent).toBe('Excellent! That is correct.');
    let feedbackContainer = document.getElementById('feedback-container');
    expect(feedbackContainer.innerHTML).toContain(currentQ.reasoning);

    // Go to Next
    document.getElementById('next-btn').click();

    // --- QUESTION 2 ---
    h2 = document.querySelector('h2');
    currentQ = getQuestionObject(h2.textContent.trim());
    expect(currentQ).toBeDefined();

    // Simulate Incorrect Answer
    optionBtns = document.querySelectorAll('.option-btn');
    let incorrectBtn = Array.from(optionBtns).find(btn => parseInt(btn.dataset.index) !== currentQ.correct_index);
    let correctBtnQ2 = Array.from(optionBtns).find(btn => parseInt(btn.dataset.index) === currentQ.correct_index);
    incorrectBtn.click();

    // Assert: Incorrect button turns red
    expect(incorrectBtn.classList.contains('bg-rose-900/30')).toBe(true);
    // Assert: Correct button gets faint green highlight
    expect(correctBtnQ2.classList.contains('bg-emerald-900/10')).toBe(true);
    
    // Assert: Feedback is displayed correctly
    feedbackText = document.getElementById('feedback-text');
    expect(feedbackText.textContent).toContain('Incorrect');
    feedbackContainer = document.getElementById('feedback-container');
    expect(feedbackContainer.innerHTML).toContain(currentQ.reasoning);

    // Go to Next (which ends quiz)
    document.getElementById('next-btn').click();

    // --- RESULTS SCREEN ---
    // Assert results title and calculated values (1/2 correct = 50%)
    expect(app.innerHTML).toContain('Quiz Complete!');
    expect(app.innerHTML).toContain('50%');
    expect(app.innerHTML).toContain('need more practice');

    // Assure "Try Again" works completely
    const restartBtn = document.getElementById('restart-btn');
    expect(restartBtn).not.toBeNull();
    restartBtn.click();
    
    // Should return to the start screen
    expect(app.innerHTML).toContain('AIGP Practice Quiz');
  });
});

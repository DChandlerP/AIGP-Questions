import quizData from './aigp_questions.json';
import { formatTime } from './utils.js';

const app = document.getElementById('app');

function initQuiz() {
  const questions = quizData.questions;

  app.innerHTML = `
    <div class="glass-panel rounded-3xl p-10 md:p-14 text-center transform hover:scale-[1.01] transition-transform duration-500">
      <div class="inline-flex items-center justify-center p-4 bg-indigo-500/10 rounded-2xl mb-6 shadow-inner border border-indigo-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-tight">
        AIGP Practice Quiz
      </h1>
      <p class="text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
        Test your knowledge of AI concepts, governance, and risk management. You will have <span class="text-indigo-300 font-semibold">${questions.length} minutes</span> to complete <span class="text-indigo-300 font-semibold">${questions.length} questions</span>.
      </p>
      
      <div class="flex justify-center">
        <button id="start-btn" class="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] hover:-translate-y-1 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span class="relative flex items-center gap-2">
            Start Quiz
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
        </button>
      </div>
    </div>
  `;

  // Add the shimmer animation dynamically for the start button
  if (!document.getElementById('shimmer-style')) {
    const style = document.createElement('style');
    style.id = 'shimmer-style';
    style.textContent = `
      @keyframes shimmer {
        100% { transform: translateX(100%); }
      }
    `;
    document.head.appendChild(style);
  }

  document.getElementById('start-btn').addEventListener('click', () => {
    startQuiz(questions);
  });
}

function startQuiz(questions) {
  let currentQuestionIndex = 0;
  let score = 0;
  let timerInterval = null;
  // Initialize timer for 1 minute per question
  let remainingTimeSeconds = questions.length * 60;

  // Randomize questions
  const randomizedQuestions = [...questions].sort(() => Math.random() - 0.5);

  function startTimer() {
    timerInterval = setInterval(() => {
      remainingTimeSeconds--;
      updateTimerDisplay();

      if (remainingTimeSeconds <= 0) {
        clearInterval(timerInterval);
        renderResults("Time's up!");
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerElement = document.getElementById('quiz-timer');
    if (timerElement) {
      timerElement.textContent = formatTime(remainingTimeSeconds);
      if (remainingTimeSeconds <= 60 && remainingTimeSeconds > 0) {
        timerElement.classList.add('text-rose-400', 'animate-pulse');
        timerElement.classList.remove('text-indigo-300');
      }
    }
  }

  function renderQuestion() {
    if (currentQuestionIndex >= randomizedQuestions.length) {
      clearInterval(timerInterval);
      renderResults();
      return;
    }

    const q = randomizedQuestions[currentQuestionIndex];
    let optionsHtml = '';

    // Create options with random order but keep track of correct one
    const optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    const randomizedOptions = optionsWithIndex.sort(() => Math.random() - 0.5);

    randomizedOptions.forEach((opt) => {
      optionsHtml += `
        <button class="option-btn text-left p-5 md:p-6 rounded-2xl glass-button focus:outline-none focus:ring-2 focus:ring-indigo-500/50 mb-4 group relative overflow-hidden" data-index="${opt.originalIndex}">
          <div class="flex items-start gap-4">
            <div class="mt-1 w-6 h-6 rounded-full border-2 border-slate-600 flex-shrink-0 flex items-center justify-center group-hover:border-indigo-400/50 transition-colors">
              <div class="w-2.5 h-2.5 rounded-full bg-indigo-400 opacity-0 transition-opacity bullet-inner"></div>
            </div>
            <span class="text-slate-200 text-lg leading-relaxed group-hover:text-white transition-colors">
              ${opt.text}
            </span>
          </div>
        </button>
      `;
    });

    const progressPercent = ((currentQuestionIndex) / randomizedQuestions.length) * 100;

    app.innerHTML = `
      <div class="animate-fade-in w-full">
        <!-- Progress bar -->
        <div class="w-full bg-slate-800 rounded-full h-2 mb-8 overflow-hidden border border-slate-700/50">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 ease-out" style="width: ${progressPercent}%"></div>
        </div>

        <div class="glass-panel rounded-3xl p-8 md:p-10">
          <div class="flex flex-wrap justify-between items-center mb-8 gap-4">
            <span class="text-slate-400 font-medium tracking-wide">
              Question <span class="text-slate-200 font-bold">${currentQuestionIndex + 1}</span> of ${randomizedQuestions.length}
            </span>
            <div class="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span id="quiz-timer" class="font-bold text-indigo-300 tracking-wider text-xl">${formatTime(remainingTimeSeconds)}</span>
            </div>
          </div>
          
          <h2 class="text-2xl md:text-3xl font-bold mb-10 leading-snug text-white">
            ${q.question}
          </h2>
          
          <div class="flex flex-col">
            ${optionsHtml}
          </div>
          
          <div id="feedback-container" class="mt-8 hidden animate-fade-in">
            <div id="feedback-message" class="flex items-center gap-3 p-5 rounded-2xl font-semibold text-lg mb-6 shadow-sm">
              <span id="feedback-icon"></span>
              <span id="feedback-text"></span>
            </div>
            
            <div class="bg-slate-800/60 p-6 md:p-8 rounded-2xl text-slate-300 leading-relaxed border border-slate-700/80 shadow-inner relative overflow-hidden">
              <div class="absolute top-0 left-0 w-1 h-full bg-indigo-500/50"></div>
              <h3 class="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                Explanation
              </h3>
              <p class="text-[1.05rem] opacity-90">${q.reasoning}</p>
            </div>
            
            <div class="mt-10 flex justify-end">
              <button id="next-btn" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)] hover:-translate-y-1 flex items-center gap-2">
                Next Question
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;

        // Disable all buttons
        document.querySelectorAll('.option-btn').forEach(b => {
          b.disabled = true;
          b.classList.remove('hover:bg-slate-700', 'hover:border-slate-500');
          b.classList.add('opacity-60', 'cursor-default');
        });

        const selectedIndex = parseInt(btn.dataset.index);
        const correctIndex = q.correct_index;

        // Highlight selection dot
        btn.querySelector('.bullet-inner').classList.remove('opacity-0');

        if (selectedIndex === correctIndex) {
          score++;
          btn.classList.add('bg-emerald-900/30', 'border-emerald-500/50', '!opacity-100');
          btn.querySelector('.bullet-inner').classList.add('!bg-emerald-400');
          btn.querySelector('div.border-slate-600').classList.add('!border-emerald-400');
        } else {
          btn.classList.add('bg-rose-900/30', 'border-rose-500/50', '!opacity-100');
          btn.querySelector('.bullet-inner').classList.add('!bg-rose-400');
          btn.querySelector('div.border-slate-600').classList.add('!border-rose-400');

          // Show correct option
          const correctBtn = document.querySelector(`.option-btn[data-index="${correctIndex}"]`);
          if (correctBtn) {
            correctBtn.classList.add('bg-emerald-900/10', 'border-emerald-500/50', '!opacity-100');
            correctBtn.querySelector('div.border-slate-600').classList.add('!border-emerald-400/50');
          }
        }

        const feedbackContainer = document.getElementById('feedback-container');
        const feedbackMessage = document.getElementById('feedback-message');
        const feedbackIcon = document.getElementById('feedback-icon');
        const feedbackText = document.getElementById('feedback-text');

        feedbackContainer.classList.remove('hidden');
        if (selectedIndex === correctIndex) {
          feedbackMessage.classList.add('bg-emerald-500/10', 'text-emerald-400', 'border', 'border-emerald-500/20');
          feedbackIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
          feedbackText.textContent = 'Excellent! That is correct.';
        } else {
          feedbackMessage.classList.add('bg-rose-500/10', 'text-rose-400', 'border', 'border-rose-500/20');
          feedbackIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
          feedbackText.textContent = 'Incorrect. Let\'s review the explanation.';
        }

        // Scroll to feedback
        setTimeout(() => {
          feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);

        document.getElementById('next-btn').addEventListener('click', () => {
          currentQuestionIndex++;
          renderQuestion();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    });
  }

  startTimer();
  renderQuestion();

  function renderResults(customTitle) {
    const percentage = randomizedQuestions.length > 0 ? Math.round((score / randomizedQuestions.length) * 100) : 0;
    const title = customTitle || "Quiz Complete!";
    let message = "";
    let icon = "";
    let scoreColor = "";

    if (percentage >= 80) {
      message = "Outstanding! You have a strong grasp of these concepts.";
      icon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-emerald-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8.5C8 7.39543 8.89543 6.5 10 6.5H14C15.1046 6.5 16 7.39543 16 8.5V8.5C16 11.2614 13.7614 13.5 11 13.5V13.5C8.23858 13.5 6 11.2614 6 8.5V8.5"></path><path d="M12 13.5V21"></path><path d="M9 21H15"></path></svg>`;
      scoreColor = "text-emerald-400";
    } else if (percentage >= 60) {
      message = "Good effort, but there's room for improvement. Keep studying!";
      icon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-blue-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      scoreColor = "text-blue-400";
    } else {
      message = "You'll need more practice. Review the materials and try again.";
      icon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-amber-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
      scoreColor = "text-amber-400";
    }

    app.innerHTML = `
      <div class="glass-panel rounded-3xl p-10 md:p-14 text-center animate-fade-in relative overflow-hidden">
        
        <div class="mb-8 p-6 bg-slate-800/50 rounded-full inline-block shadow-inner">
          ${icon}
        </div>
        
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">${title}</h2>
        <p class="text-slate-300 text-xl mb-12 max-w-lg mx-auto">${message}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div class="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 shadow-lg transform hover:-translate-y-1 transition-transform">
            <div class="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2">Accuracy</div>
            <div class="text-5xl font-extrabold ${scoreColor}">${percentage}%</div>
          </div>
          
          <div class="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 shadow-lg transform hover:-translate-y-1 transition-transform">
            <div class="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2 border-emerald-500/30">Correct</div>
            <div class="text-5xl font-extrabold text-white">${score}</div>
          </div>
          
          <div class="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 shadow-lg transform hover:-translate-y-1 transition-transform">
            <div class="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2">Incorrect</div>
            <div class="text-5xl font-extrabold text-slate-300">${currentQuestionIndex - score}</div>
          </div>
        </div>

        <button id="restart-btn" class="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-[0_0_30px_-10px_rgba(99,102,241,0.6)] hover:-translate-y-1 flex items-center gap-3 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
          Try Again
        </button>
      </div>
    `;

    document.getElementById('restart-btn').addEventListener('click', () => {
      initQuiz();
    });
  }
}

initQuiz();

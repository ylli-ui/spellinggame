// Game Configuration - 50 Verbs (Regular and Irregular)
const VERBS = [
    // Irregular Verbs
    { base: 'run', past: 'ran', pastParticiple: 'run', presentHeSheIt: 'runs', presentContinuous: 'running' },
    { base: 'go', past: 'went', pastParticiple: 'gone', presentHeSheIt: 'goes', presentContinuous: 'going' },
    { base: 'eat', past: 'ate', pastParticiple: 'eaten', presentHeSheIt: 'eats', presentContinuous: 'eating' },
    { base: 'swim', past: 'swam', pastParticiple: 'swum', presentHeSheIt: 'swims', presentContinuous: 'swimming' },
    { base: 'sing', past: 'sang', pastParticiple: 'sung', presentHeSheIt: 'sings', presentContinuous: 'singing' },
    { base: 'write', past: 'wrote', pastParticiple: 'written', presentHeSheIt: 'writes', presentContinuous: 'writing' },
    { base: 'read', past: 'read', pastParticiple: 'read', presentHeSheIt: 'reads', presentContinuous: 'reading' },
    { base: 'speak', past: 'spoke', pastParticiple: 'spoken', presentHeSheIt: 'speaks', presentContinuous: 'speaking' },
    { base: 'think', past: 'thought', pastParticiple: 'thought', presentHeSheIt: 'thinks', presentContinuous: 'thinking' },
    { base: 'buy', past: 'bought', pastParticiple: 'bought', presentHeSheIt: 'buys', presentContinuous: 'buying' },
    { base: 'bring', past: 'brought', pastParticiple: 'brought', presentHeSheIt: 'brings', presentContinuous: 'bringing' },
    { base: 'sit', past: 'sat', pastParticiple: 'sat', presentHeSheIt: 'sits', presentContinuous: 'sitting' },
    { base: 'stand', past: 'stood', pastParticiple: 'stood', presentHeSheIt: 'stands', presentContinuous: 'standing' },
    { base: 'fall', past: 'fell', pastParticiple: 'fallen', presentHeSheIt: 'falls', presentContinuous: 'falling' },
    { base: 'catch', past: 'caught', pastParticiple: 'caught', presentHeSheIt: 'catches', presentContinuous: 'catching' },
    { base: 'give', past: 'gave', pastParticiple: 'given', presentHeSheIt: 'gives', presentContinuous: 'giving' },
    { base: 'take', past: 'took', pastParticiple: 'taken', presentHeSheIt: 'takes', presentContinuous: 'taking' },
    { base: 'see', past: 'saw', pastParticiple: 'seen', presentHeSheIt: 'sees', presentContinuous: 'seeing' },
    { base: 'come', past: 'came', pastParticiple: 'come', presentHeSheIt: 'comes', presentContinuous: 'coming' },
    { base: 'meet', past: 'met', pastParticiple: 'met', presentHeSheIt: 'meets', presentContinuous: 'meeting' },
    { base: 'make', past: 'made', pastParticiple: 'made', presentHeSheIt: 'makes', presentContinuous: 'making' },
    { base: 'know', past: 'knew', pastParticiple: 'known', presentHeSheIt: 'knows', presentContinuous: 'knowing' },
    { base: 'get', past: 'got', pastParticiple: 'gotten', presentHeSheIt: 'gets', presentContinuous: 'getting' },
    { base: 'break', past: 'broke', pastParticiple: 'broken', presentHeSheIt: 'breaks', presentContinuous: 'breaking' },
    { base: 'choose', past: 'chose', pastParticiple: 'chosen', presentHeSheIt: 'chooses', presentContinuous: 'choosing' },
    { base: 'drink', past: 'drank', pastParticiple: 'drunk', presentHeSheIt: 'drinks', presentContinuous: 'drinking' },
    { base: 'drive', past: 'drove', pastParticiple: 'driven', presentHeSheIt: 'drives', presentContinuous: 'driving' },
    { base: 'fly', past: 'flew', pastParticiple: 'flown', presentHeSheIt: 'flies', presentContinuous: 'flying' },
    { base: 'grow', past: 'grew', pastParticiple: 'grown', presentHeSheIt: 'grows', presentContinuous: 'growing' },
    { base: 'hide', past: 'hid', pastParticiple: 'hidden', presentHeSheIt: 'hides', presentContinuous: 'hiding' },
    // Regular Verbs (with different spelling patterns)
    { base: 'play', past: 'played', pastParticiple: 'played', presentHeSheIt: 'plays', presentContinuous: 'playing' },
    { base: 'walk', past: 'walked', pastParticiple: 'walked', presentHeSheIt: 'walks', presentContinuous: 'walking' },
    { base: 'jump', past: 'jumped', pastParticiple: 'jumped', presentHeSheIt: 'jumps', presentContinuous: 'jumping' },
    { base: 'dance', past: 'danced', pastParticiple: 'danced', presentHeSheIt: 'dances', presentContinuous: 'dancing' },
    { base: 'study', past: 'studied', pastParticiple: 'studied', presentHeSheIt: 'studies', presentContinuous: 'studying' },
    { base: 'copy', past: 'copied', pastParticiple: 'copied', presentHeSheIt: 'copies', presentContinuous: 'copying' },
    { base: 'try', past: 'tried', pastParticiple: 'tried', presentHeSheIt: 'tries', presentContinuous: 'trying' },
    { base: 'cry', past: 'cried', pastParticiple: 'cried', presentHeSheIt: 'cries', presentContinuous: 'crying' },
    { base: 'stop', past: 'stopped', pastParticiple: 'stopped', presentHeSheIt: 'stops', presentContinuous: 'stopping' },
    { base: 'plan', past: 'planned', pastParticiple: 'planned', presentHeSheIt: 'plans', presentContinuous: 'planning' },
    { base: 'shop', past: 'shopped', pastParticiple: 'shopped', presentHeSheIt: 'shops', presentContinuous: 'shopping' },
    { base: 'hope', past: 'hoped', pastParticiple: 'hoped', presentHeSheIt: 'hopes', presentContinuous: 'hoping' },
    { base: 'love', past: 'loved', pastParticiple: 'loved', presentHeSheIt: 'loves', presentContinuous: 'loving' },
    { base: 'change', past: 'changed', pastParticiple: 'changed', presentHeSheIt: 'changes', presentContinuous: 'changing' },
    { base: 'smile', past: 'smiled', pastParticiple: 'smiled', presentHeSheIt: 'smiles', presentContinuous: 'smiling' },
    { base: 'live', past: 'lived', pastParticiple: 'lived', presentHeSheIt: 'lives', presentContinuous: 'living' },
    { base: 'arrive', past: 'arrived', pastParticiple: 'arrived', presentHeSheIt: 'arrives', presentContinuous: 'arriving' },
    { base: 'pass', past: 'passed', pastParticiple: 'passed', presentHeSheIt: 'passes', presentContinuous: 'passing' },
    { base: 'miss', past: 'missed', pastParticiple: 'missed', presentHeSheIt: 'misses', presentContinuous: 'missing' }
];

const TENSES = [
    { key: 'past', label: 'Type the past tense' },
    { key: 'pastParticiple', label: 'Type the past participle' },
    { key: 'presentHeSheIt', label: 'Type the present tense (he/she/it)' },
    { key: 'presentContinuous', label: 'Type the present continuous tense (-ing)' }
];

// Game State
let gameState = {
    team1Name: 'Team 1',
    team2Name: 'Team 2',
    team1Score: 0,
    team2Score: 0,
    gameDuration: 1,
    currentVerbIndex: 0,
    currentTenseIndex: 0,
    gameActive: false,
    timeRemaining: 60,
    ropePosition: 150, // Center position
    timerInterval: null,
    team1Submitted: false,
    team2Submitted: false
};

// DOM Elements
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const team1Input = document.getElementById('team1-input');
const team2Input = document.getElementById('team2-input');
const team1Feedback = document.getElementById('team1-feedback');
const team2Feedback = document.getElementById('team2-feedback');
const verbBase = document.getElementById('verb-base');
const tenseLabel = document.getElementById('tense-label');
const timer = document.getElementById('timer');
const ropeKnot = document.getElementById('rope-knot');
const team1Score = document.getElementById('team1-score');
const team2Score = document.getElementById('team2-score');
const wordsCount = document.getElementById('words-count');

// Event Listeners
startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', resetGame);
team1Input.addEventListener('keypress', (e) => handleKeyPress(e, 'team1'));
team2Input.addEventListener('keypress', (e) => handleKeyPress(e, 'team2'));

// Functions
function startGame() {
    gameState.team1Name = document.getElementById('team1-name').value || 'Team 1';
    gameState.team2Name = document.getElementById('team2-name').value || 'Team 2';
    gameState.gameDuration = parseInt(document.getElementById('game-duration').value) * 60;
    gameState.timeRemaining = gameState.gameDuration;
    gameState.team1Score = 0;
    gameState.team2Score = 0;
    gameState.currentVerbIndex = 0;
    gameState.currentTenseIndex = 0;
    gameState.ropePosition = 150;
    gameState.gameActive = true;
    gameState.team1Submitted = false;
    gameState.team2Submitted = false;

    // Update UI
    document.getElementById('team1-name-display').textContent = gameState.team1Name;
    document.getElementById('team2-name-display').textContent = gameState.team2Name;
    document.getElementById('team1-input-label').textContent = gameState.team1Name;
    document.getElementById('team2-input-label').textContent = gameState.team2Name;

    // Switch screens
    setupScreen.classList.remove('active');
    gameScreen.classList.add('active');

    // Start game
    loadNextQuestion();
    startTimer();
}

function loadNextQuestion() {
    const currentVerb = VERBS[gameState.currentVerbIndex];
    const currentTense = TENSES[gameState.currentTenseIndex];
    
    verbBase.textContent = currentVerb.base;
    tenseLabel.textContent = currentTense.label;
    
    team1Input.value = '';
    team2Input.value = '';
    team1Input.focus();
    
    team1Feedback.textContent = '';
    team2Feedback.textContent = '';
    team1Feedback.className = 'feedback';
    team2Feedback.className = 'feedback';
    
    gameState.team1Submitted = false;
    gameState.team2Submitted = false;

    updateScoreDisplay();
}

function handleKeyPress(e, team) {
    if (!gameState.gameActive) return;
    
    if (e.key !== 'Enter') return;
    
    e.preventDefault();
    
    // Check if already submitted
    if (team === 'team1' && gameState.team1Submitted) return;
    if (team === 'team2' && gameState.team2Submitted) return;
    
    const input = team === 'team1' ? team1Input.value.trim().toLowerCase() : team2Input.value.trim().toLowerCase();
    const feedback = team === 'team1' ? team1Feedback : team2Feedback;
    const currentVerb = VERBS[gameState.currentVerbIndex];
    const currentTense = TENSES[gameState.currentTenseIndex];
    const correctAnswer = currentVerb[currentTense.key].toLowerCase();
    
    if (input === '') return;
    
    const isCorrect = input === correctAnswer;
    
    // Mark as submitted
    if (team === 'team1') {
        gameState.team1Submitted = true;
    } else {
        gameState.team2Submitted = true;
    }
    
    if (isCorrect) {
        feedback.textContent = '✓ Correct!';
        feedback.className = 'feedback correct';
        
        if (team === 'team1') {
            gameState.team1Score++;
            moveRope('team1');
        } else {
            gameState.team2Score++;
            moveRope('team2');
        }
    } else {
        feedback.textContent = `✗ Wrong! Correct: ${correctAnswer}`;
        feedback.className = 'feedback incorrect';
    }
    
    // Check if both teams have submitted
    if (gameState.team1Submitted && gameState.team2Submitted) {
        setTimeout(() => {
            gameState.currentTenseIndex++;
            if (gameState.currentTenseIndex >= TENSES.length) {
                gameState.currentTenseIndex = 0;
                gameState.currentVerbIndex++;
                if (gameState.currentVerbIndex >= VERBS.length) {
                    gameState.currentVerbIndex = 0;
                }
            }
            loadNextQuestion();
        }, 1500);
    }
}

function moveRope(team) {
    const moveAmount = 15;
    if (team === 'team1') {
        gameState.ropePosition = Math.max(0, gameState.ropePosition - moveAmount);
    } else {
        gameState.ropePosition = Math.min(300, gameState.ropePosition + moveAmount);
    }
    
    ropeKnot.setAttribute('cx', gameState.ropePosition);
    
    // Add animation
    if (team === 'team1') {
        document.querySelector('.team-1-characters').classList.add('pull-animation');
        setTimeout(() => document.querySelector('.team-1-characters').classList.remove('pull-animation'), 500);
    } else {
        document.querySelector('.team-2-characters').classList.add('pull-animation');
        setTimeout(() => document.querySelector('.team-2-characters').classList.remove('pull-animation'), 500);
    }
}

function startTimer() {
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateTimerDisplay();
        
        if (gameState.timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeRemaining / 60);
    const seconds = gameState.timeRemaining % 60;
    timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function updateScoreDisplay() {
    team1Score.textContent = `Words: ${gameState.team1Score}`;
    team2Score.textContent = `Words: ${gameState.team2Score}`;
    wordsCount.textContent = `Words: ${gameState.team1Score + gameState.team2Score}`;
}

function endGame() {
    gameState.gameActive = false;
    clearInterval(gameState.timerInterval);
    
    // Determine winner
    const team1Final = gameState.team1Score;
    const team2Final = gameState.team2Score;
    let winnerText;
    
    if (team1Final > team2Final) {
        winnerText = `🎉 ${gameState.team1Name} Wins!`;
    } else if (team2Final > team1Final) {
        winnerText = `🎉 ${gameState.team2Name} Wins!`;
    } else {
        winnerText = "🤝 It's a Tie!";
    }
    
    // Update end screen
    document.getElementById('winner-text').textContent = winnerText;
    document.getElementById('final-score').textContent = `${gameState.team1Name}: ${team1Final} | ${gameState.team2Name}: ${team2Final}`;
    document.getElementById('team1-final-name').textContent = gameState.team1Name;
    document.getElementById('team1-final-score').textContent = team1Final;
    document.getElementById('team2-final-name').textContent = gameState.team2Name;
    document.getElementById('team2-final-score').textContent = team2Final;
    
    // Switch screens
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
}

function resetGame() {
    // Reset state
    gameState.team1Score = 0;
    gameState.team2Score = 0;
    gameState.currentVerbIndex = 0;
    gameState.currentTenseIndex = 0;
    gameState.ropePosition = 150;
    gameState.gameActive = false;
    gameState.team1Submitted = false;
    gameState.team2Submitted = false;
    
    // Clear inputs
    team1Input.value = '';
    team2Input.value = '';
    
    // Switch screens
    endScreen.classList.remove('active');
    setupScreen.classList.add('active');
}

// Initialize rope position
ropeKnot.setAttribute('cx', gameState.ropePosition);
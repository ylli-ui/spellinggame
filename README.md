# English Verb Tug of War 🎮

An interactive web-based educational game designed to help kids learn English verb conjugations through a fun, competitive tug-of-war gameplay experience.

## Features

✨ **Game Setup**
- Teams can enter custom team names
- Choose game duration (1-10 minutes)
- Simple and intuitive interface

🎯 **Gameplay Mechanics**
- **Tug of War Challenge**: Two teams compete side by side
- **Verb Conjugation Tasks**: Learn 4 different tenses:
  - Past tense
  - Past participle
  - Present tense (he/she/it)
  - Present continuous tense
- **Real-time Feedback**: Immediate correct/incorrect responses
- **Visual Progress**: Rope moves toward the team that answers correctly
- **Dual Input System**: Each team has their own keyboard input

📊 **Game Features**
- 20 commonly used English verbs
- Multiple tense conjugations per verb
- Score tracking for both teams
- Timer countdown
- Animated characters celebrating correct answers
- Responsive design for all devices

🏆 **End Game**
- Winner announcement
- Final score display
- Option to play again

## How to Play

1. **Setup Phase**
   - Enter Team 1 and Team 2 names
   - Select game duration (1-10 minutes)
   - Click "Start Game"

2. **Playing**
   - The base form of a verb appears in the center
   - Each team is asked to type the correct conjugation for a specific tense
   - Type your answer and press ENTER
   - If correct, your team's character pulls the rope closer and gets a point
   - If incorrect, you'll see the correct answer and can try again

3. **Scoring**
   - Each correct answer = 1 point
   - The rope moves toward the winning team
   - Team with the most points when time runs out wins!

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Responsive design with gradients and animations
- **Vanilla JavaScript**: Game logic and interactivity
- **SVG**: Rope and knot graphics

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ylli-ui/spellinggame.git
```

2. Navigate to the project directory:
```bash
cd spellinggame
```

3. Open `index.html` in your web browser

## File Structure

```
spellinggame/
├── index.html      # Main HTML file with game structure
├── styles.css      # Styling and animations
├── script.js       # Game logic and functionality
└── README.md       # This file
```

## Verbs Included

The game features 20 commonly used English verbs:

- run, go, eat, play, walk, jump, swim, sing, dance, study
- write, read, speak, think, buy, bring, sit, stand, fall, catch

## Customization

### Adding More Verbs

Edit the `VERBS` array in `script.js`:

```javascript
const VERBS = [
    { 
        base: 'verb', 
        past: 'past form', 
        pastParticiple: 'past participle form', 
        presentHeSheIt: 'he/she/it form', 
        presentContinuous: '-ing form' 
    },
    // Add more verbs...
];
```

### Changing Game Duration Options

Modify the dropdown in `index.html`:

```html
<option value="1">1 minute</option>
<option value="2">2 minutes</option>
<!-- Add more options -->
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (responsive design)

## Live Demo

Play the game online at: [GitHub Pages Link]

## Future Enhancements

- Sound effects and music
- Difficulty levels (easy, medium, hard)
- Power-ups and bonuses
- Multiplayer online support
- Leaderboard system
- Achievement badges
- More verb categories and tenses
- Teacher dashboard for creating custom verb lists

## License

MIT License - feel free to use this for educational purposes.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## Author

Created as an educational tool for English language learners.

---

**Happy Learning! 🎓**
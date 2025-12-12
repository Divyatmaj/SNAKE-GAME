Summary:-
Snake — a minimal arcade-style snake game. Objective: reach 18 points by eating food while never colliding with your own body. One life per run. Clean, deterministic rules for quick play and easy testing.

Goal: Score 18 points to win.
You lose immediately if the snake's head collides with any part of its body.

Controls- Arrow keys or WASD:
Up / W
Down / S
Left / A
Right / D

Scoring & Mechanics
Each food eaten = +1 point.
Food appears at a random unoccupied grid cell.
Snake grows by 1 segment when food is eaten.
Movement is grid-based, fixed timestep (e.g., 10–15 frames/sec).

Win / Loss Conditions
Win: score ≥ 18 → show WIN screen and final time.
Lose: head position equals any body segment → show GAME OVER and final score.

Features
Configurable grid size and speed.
Single-player, keyboard input.
Simple UI: score, goal (18), and status message.
Optional high-score persistence (local storage / file).

Installation (quick)
Clone repo:
git clone https://github.com/Divyatmaj/SNAKE-GAME/edit/master
cd snake
Or just use the Link


Tips for Players (practical)
Avoid tight spirals; keep buffer space.
Plan turns 2–3 steps ahead as snake grows.
Use edges (if wrapping) to reposition without crossing your tail.

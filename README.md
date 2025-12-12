#Summary:-
Snake — a minimal arcade-style snake game. Objective: reach 18 points by eating food while never colliding with your own body. One life per run. Clean, deterministic rules for quick play and easy testing.


#Goal: Score 18 points to win.

You lose immediately if the snake's head collides with any part of its body.


#Controls- Arrow keys or WASD:
Up / W
Down / S
Left / A
Right / D


#Scoring & Mechanics

Each food eaten = +1 point.

Food appears at a random unoccupied grid cell.

Snake grows by 1 segment when food is eaten.

Movement is grid-based, fixed timestep (e.g., 10–15 frames/sec).


#Win / Loss Conditions

Win: score ≥ 18 → show WIN screen and final time.

Lose: head position equals any body segment → show GAME OVER and final score.


#Features

Configurable grid size and speed.

Single-player, keyboard input.

Simple UI: score, goal (18), and status message.

Optional high-score persistence (local storage / file).


#Installation (quick)

Clone repo:

git clone https://github.com/Divyatmaj/SNAKE-GAME/edit/master

cd snake

<img width="1512" height="869" alt="Screenshot 2025-12-12 at 8 50 02 PM" src="https://github.com/user-attachments/assets/b498f3a8-971c-40ae-afb3-e5e930de15e8" />

<img width="1512" height="867" alt="Screenshot 2025-12-12 at 8 50 55 PM" src="https://github.com/user-attachments/assets/c6d68159-cf95-4170-8100-dff21efee3b3" />


#Tips for Players (practical)

Avoid tight spirals; keep buffer space.

Plan turns 2–3 steps ahead as snake grows.

Use edges (if wrapping) to reposition without crossing your tail.

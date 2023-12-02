import ImageSprite, {
    getImage,
    RenderImageSprites,
} from "./js/sprites/imageSprite.js";
import { sprites } from "./js/globals.js";
import Rover from "./js/sprites/rover.js";
import Background from "./js/sprites/background.js";
import Star from "./js/sprites/star.js";
import highscoreManager, { Score } from "./js/highscoreManager.js";
import Alien from "./js/sprites/alien.js";
import randomNumber from "./js/randomNumber.js";

const qs = (q) => document.querySelector(q);

const bSave = qs("#e");
const bGetL = qs("#g");
const bClrL = qs("#l");

const lScrL = qs("#o");

const header = qs("#lh");

const pScore = qs("#s");

let rover;

window.onload = () => {
    new Background();

    rover = new Rover();

    new Alien();

    console.log(sprites);


    new Star();

};

bSave.onclick = () => {
    document.body.innerHTML = "<p>Refresh for new game</p>";
    let name = window.prompt("Your name", "Harry Potter");
    let score = rover.getScore();

    highscoreManager.write(Score(name !== null && name !== '' ? name : 'Anonymous' + randomNumber(500), score));
};

bGetL.onclick = () => {
    const scores = highscoreManager.read();
    scores.sort((a, b) => b.score - a.score);
    header.innerHTML = "<=Leaderboard=>";
    lScrL.innerHTML = "";
    scores.map((v) => (lScrL.innerHTML += `<li>| ${v.name} -> ${v.score} |</li>`));
};

bClrL.onclick = () => confirm('are u sure?') ? highscoreManager.clear() : console.log('canceled');

export function DisplayScore(score) {
    pScore.innerHTML = score;
};

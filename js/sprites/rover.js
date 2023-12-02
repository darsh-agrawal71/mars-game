import { cnv, sprites, KEYS } from "../globals.js";
import ImageSprite, { getImage, RenderImageSprites } from "./imageSprite.js";
import collidingWith from "../collidingWith.js";
import Star from "./star.js";

import { DisplayScore } from "../../main.js";

export default function Rover() {
    this.name = 'roverSprite'
    this.score = 0

    this.getScore = () => this.score
    
    getImage('../../img/rover.png', url => {
        sprites[this.name] = new ImageSprite(10, 10, 100, 90, url, cnv);
    })

    window.addEventListener('keydown', e => this.onKeyDown(e));
    this.updateInterval = window.setInterval(() => this.update(), 100)

    this.onKeyDown = e => {
        const keyCode = e.keyCode;
        const sprite = sprites[this.name];

        switch (keyCode) {
            case KEYS.W:
            case KEYS.UP:
                if (sprite.getY() > 10) {
                    sprite.setY(sprite.getY() - 10);
                    RenderImageSprites(sprites);
                }
                break;
            case KEYS.S:
            case KEYS.DOWN:
                if (sprite.getY() <= 500) {
                    sprite.setY(sprite.getY() + 10);
                    RenderImageSprites(sprites);
                }
                break;
            case KEYS.A:
            case KEYS.LEFT:
                if (sprite.getX() >= 0) {
                    sprite.setX(sprite.getX() - 10);
                    RenderImageSprites(sprites);
                }
                break;

            case KEYS.D:
            case KEYS.RIGHT:
                if (sprite.getX() <= 700) {
                    sprite.setX(sprite.getX() + 10);
                    RenderImageSprites(sprites);
                }
                break;
        }

    }

    this.update = () => {
        if(collidingWith(sprites['roverSprite'], sprites['starSprite'])) {
            new Audio('../../aud/ding.mp3').play()
            this.score += 10;
            DisplayScore(this.score)
            delete sprites['starSprite'];
            new Star()
            RenderImageSprites(sprites)
        }

        if (collidingWith(sprites['roverSprite'], sprites['alienSprite'])) {
            clearInterval(this.updateInterval)
            window.removeEventListener('keydown', this.onKeyDown)
            new Audio('../../aud/power_down.mp3').play()
            document.body.innerHTML = `<h1> YOU LOST </h1> <br> <h1>Your score: ${this.score}</h1>`
            RenderImageSprites();
        }
    }

    

}

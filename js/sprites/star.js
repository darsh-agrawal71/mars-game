import { cnv, sprites } from "../globals.js";
import ImageSprite, { getImage } from "./imageSprite.js";
import randomNumber from "../randomNumber.js";

export default function Star() {
    this.name = "starSprite";

    getImage("../../img/star.png", (url) => {
        sprites[this.name] = new ImageSprite(
            randomNumber(700) + 50,
            randomNumber(500) + 50,
            50,
            50,
            url,
            cnv
        );
    });
}

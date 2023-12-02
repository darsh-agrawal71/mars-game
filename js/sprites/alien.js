import { cnv, sprites } from "../globals.js";
import randomNumber from "../randomNumber.js";
import ImageSprite, { getImage } from "./imageSprite.js";

export default function Alien() {
    this.name = 'alienSprite';

    getImage("../../img/alien.png", (url) => {
        sprites[this.name] = new ImageSprite(
            randomNumber(650) + 50,
            randomNumber(450) + 50,
            75,
            75,
            url,
            cnv
        );
    });
}

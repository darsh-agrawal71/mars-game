import { cnv, sprites } from "../globals.js";
import ImageSprite, { getImage } from "./imageSprite.js";

export default function Background() {
    this.name = "backgroundSprite";
    getImage('../../img/mars.jpg', (url) => {
        sprites[this.name] = new ImageSprite(
            0,
            0,
            cnv.width,
            cnv.height,
            url,
            cnv
        );
    }); 
}

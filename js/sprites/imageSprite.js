import { cnv, convertFSResLinkToGithubResLink } from "../globals.js";
import collidingWith from "../collidingWith.js";

/**
 *
 * @param {Integer} x x position of the sprite
 * @param {Integer} y y position of the sprite
 * @param {Integer} w width of the sprite
 * @param {Integer} h height of the sprite
 * @param {String} imageUrl Blob image url of the image.
 * @param {HTMLCanvasElement} cnv the canvas to draw the sprite
 */
export default function ImageSprite(x, y, w, h, imageUrl, cnv) {
    this.ctx = cnv.getContext("2d");

    this.image = new Image();
    this.image.src = imageUrl;

    this.getImage = () => this.image;
    this.setImage = (val) => (this.image = val);

    this.x = x;
    this.getX = () => this.x;
    this.setX = (val) => (this.x = val);

    this.y = y;
    this.getY = () => this.y;
    this.setY = (val) => (this.y = val);

    this.width = w;
    this.getWidth = () => this.width;
    this.setWidth = (val) => (this.width = val);

    this.height = h;
    this.getHeight = () => this.height;
    this.setHeight = (val) => (this.height = val);

    this.image.onload = () => this.render()

    this.render = function () {
        this.ctx.drawImage(
            this.image,
            this.getX(),
            this.getY(),
            this.getWidth(),
            this.getHeight()
        );
    }
}

/**
 *
 * @param {ImageSprite[]} sprites the key-pair object of ImageSprites.
 * This will re-render all of the sprites passed to it
 */
export function RenderImageSprites(sprites) {
    cnv.getContext('2d').clearRect(0, 0,cnv.width, cnv.height);
    for (const key in sprites) {
        sprites[key].render();
    }
}

/**
 * @param {String} imgPath the path of the image. Will automatically convert to github-friendly link if needed [#1].
 * @param {VoidFunction} callback called after image is fetched. must have one parameter for the url
 *  @returns {Promise<String>} that will return the blob url.
 */

export const getImage = (imgPath, callback) =>
    fetch(imgPath)
        .then((img) => img.blob())
        .then((blob) => URL.createObjectURL(blob))
        .then(callback);

import ImageSprite from "./sprites/imageSprite.js";

/**
 * @param {Type} s1 sprite class 1
 * @param {Type} s2 sprite class 2
 * @return {boolean} true if colliding else false.
 */
const collidingWith = (s1, s2) =>
    s1 instanceof ImageSprite && s2 instanceof ImageSprite ?    
        s1.x + s1.width >= s2.x &&
        s1.x <= s2.x + s2.width &&
        s1.y + s1.height >= s2.y &&
        s1.y <= s2.y + s2.height ? true : false
    : false;

export default collidingWith;

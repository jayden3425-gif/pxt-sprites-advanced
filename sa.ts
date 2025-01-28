// Add your code here
//% weight=100 color=#0fbc11 icon="\uf11b"
namespace advanced {

    /**
     * Flips the sprite horizontally
     */
    //% group="Advanced"
    //% blockId=sprites_advanced_flip_horizontally block="flip %sprite horizontally"
    //% blockNamespace=sprites
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    export function flipHorizontally(sprite: Sprite) {
        sprite.image.flipX();
    }

    /**
     * Flips the sprite vertically
     */
    //% group="Advanced"
    //% blockId=sprites_advanced_flip_vertically block="flip %sprite vertically"
    //% blockNamespace=sprites
    //% sprite.defl=mySprite
    //% sprite.shadow=variables_get
    export function flipVertically(sprite: Sprite) {
        sprite.image.flipY();
    }
    //% block="on paint"
    export function draw(a: () => void) {
        game.onPaint(a)
    }
}

let lights0n = false
input.onSound(DetectedSound.Loud, function () {
    lights0n = !(lights0n)
    if (lights0n) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # . .
            # # # . .
            . . . . .
            `)
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . . .
            . . . . .
            `)
        music.playTone(349, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . #
            . . # # #
            . . # # #
            . . . . .
            . . . . .
            `)
        music.playTone(330, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . # . . .
            . # . . .
            . # . . .
            # . . . .
            `)
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . # . .
            . . . . .
            `)
        music.playTone(392, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . . .
            . . . . .
            `)
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playTone(523, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(440, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . . .
            . . . . .
            `)
        music.playTone(349, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . # . . .
            . # . . .
            . # . . .
            # . . . .
            `)
        music.playTone(330, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . # .
            . . . # .
            . # # # .
            # . . # .
            . # # # .
            `)
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . # .
            . . . . .
            . . . . .
            `)
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . # .
            . . . . .
            . . . . .
            `)
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(440, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . . .
            . . . . .
            `)
        music.playTone(349, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . # . .
            . . . . .
            `)
        music.playTone(392, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . . .
            . . . . .
            `)
        music.playTone(349, music.beat(BeatFraction.Double))
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})

lights0n = False

def on_sound_loud():
    global lights0n
    lights0n = not (lights0n)
    if lights0n:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
        basic.show_leds("""
            . . . . .
                        . # # # .
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # # # . .
                        # # # . .
                        . . . . .
        """)
        music.play_tone(294, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . . .
                        . # # # .
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . # . . .
                        . . . . .
        """)
        music.play_tone(349, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . . #
                        . . # # #
                        . . # # #
                        . . . . .
                        . . . . .
        """)
        music.play_tone(330, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . . .
                        . # # # .
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . . .
                        . # # # .
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . . .
                        . # . . .
                        . # . . .
                        . # . . .
                        # . . . .
        """)
        music.play_tone(294, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . . .
                        . # # # .
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . # .
                        . . . # .
                        . . . # .
                        . . # . .
                        . . . . .
        """)
        music.play_tone(392, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . # . . .
                        . . . . .
        """)
        music.play_tone(349, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . . .
                        . # # # .
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . . .
                        . # # # .
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            # # . . .
                        # # . . .
                        . # . . .
                        . # . . .
                        . . . . .
        """)
        music.play_tone(523, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . . # .
                        . . . # .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        music.play_tone(440, music.beat(BeatFraction.DOUBLE))
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . # . . .
                        . . . . .
        """)
        music.play_tone(349, music.beat(BeatFraction.DOUBLE))
    else:
        pass
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_forever():
    pass
basic.forever(on_forever)

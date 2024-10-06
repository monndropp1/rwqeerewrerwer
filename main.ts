basic.showLeds(`
    . . . . .
    . . # . #
    . . # . #
    . . . . .
    . . . # .
    `)
music.play(music.stringPlayable("- B F - - - C5 C ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . . . .
    . . # . .
    `)
music.play(music.stringPlayable("C5 D - G - - - B ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    # . # . .
    # . # . .
    . . . . .
    . # . . .
    `)
music.play(music.stringPlayable("C5 - C - G - - C ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . .
    . # # # .
    . . # . #
    `)
music.play(music.stringPlayable("C5 - D C5 - F - C5 ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . # . . #
    # . # # .
    . # . . #
    . . # # .
    `)
music.play(music.stringPlayable("C5 - - A E - - C ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    # # . # #
    # # . # #
    . # # # .
    . # # # .
    `)
music.play(music.stringPlayable("- B A - - A - - ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # # . # #
    # # . # #
    # # . # #
    . # # # .
    . # # # .
    `)
music.play(music.stringPlayable("C5 C5 C5 A G F E C ", 120), music.PlaybackMode.UntilDone)

function _2 () {
    adventure.clearTextLog()
    adventure.addToTextlog("")
    adventure.addImageToTextLog(img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `)
    adventure.addToTextlog("A=fight")
    adventure.addToTextlog("B=run")
    pauseUntil(() => controller.B.isPressed() || controller.A.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("")
    }
    if (controller.B.isPressed()) {
        adventure.addToTextlog("")
    }
}
function _1 () {
    adventure.clearTextLog()
    adventure.addToTextlog("a snake attacks!")
    adventure.addImageToTextLog(img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `)
    adventure.addToTextlog("A=fight")
    adventure.addToTextlog("B=run")
    pauseUntil(() => controller.B.isPressed() || controller.A.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you take damage but win!")
        info.changeLifeBy(-1)
        adventure.changeScoreOverride(adventure.Currency.Coins, 1)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        _2()
    }
    if (controller.B.isPressed()) {
        adventure.addToTextlog("the snake hits you as you run but you escape!")
        info.changeLifeBy(-1)
        _2()
    }
}
adventure.addToTextlog("this is the start of your adventure!")
adventure.addToTextlog("are you ready?")
adventure.addToTextlog("A=yes")
adventure.addToTextlog("B=no")
pauseUntil(() => controller.B.isPressed() || controller.A.isPressed())
if (controller.A.isPressed()) {
    adventure.addToTextlog("lets go!")
    adventure.setScoreOverride(adventure.Currency.Coins, 3)
    info.setLife(3)
    _1()
}
if (controller.B.isPressed()) {
    adventure.addToTextlog("oh well...")
    game.gameOver(false)
}

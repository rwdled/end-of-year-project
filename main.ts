input.onButtonPressed(Button.A, function () {
    basic.showString("armed")
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 490; index++) {
        music.playMelody("C5 B C5 B C5 B C5 B ", 1000)
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
basic.showString("unarmed")
basic.forever(function () {
	
})
control.inBackground(function () {
	
})

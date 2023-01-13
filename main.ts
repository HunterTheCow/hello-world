input.onButtonPressed(Button.A, function () {
    music.playMelody("G A B C5 C D E F ", 500)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C E G B C E G B ", 120)
    basic.showIcon(IconNames.SmallHeart)
})
basic.showIcon(IconNames.Yes)
music.playMelody("C D E F G A B C5 ", 200)
basic.forever(function () {
	
})

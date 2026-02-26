serial.redirectToUSB()
let simTemp = input.temperature()
let LIMIT = 30
function update() {
    basic.showNumber(simTemp)
    if (simTemp >= LIMIT) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.clearScreen()
    }
    
}

update()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    simTemp += 1
    update()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    simTemp -= 1
    update()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    simTemp = input.temperature()
    update()
})

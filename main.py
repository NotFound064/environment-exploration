serial.redirect_to_usb()

simTemp = input.temperature()
LIMIT = 30

def update():
    basic.show_number(simTemp)
    
    if simTemp >= LIMIT:
        basic.show_icon(IconNames.SAD)  
    else:
        basic.clear_screen()

update()

def on_button_pressed_a():
    global simTemp
    simTemp += 1
    update()

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global simTemp
    simTemp -= 1
    update()

input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    global simTemp
    simTemp = input.temperature() 
    update()

input.on_button_pressed(Button.AB, on_button_pressed_ab)
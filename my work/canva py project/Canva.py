import tkinter as tk
#we use this to choose color for text and shape
from tkinter import colorchooser

def choose_color():
    #Open a color chooser dialog and return the selected color
    color_code = colorchooser.askcolor(title="Choose Color")[1]
    return color_code

def add_text():
    # Add text to the canvas with the selected colo
    text = text_var.get()
    color = text_color_var.get()
    canvas.create_text(100, 100, text=text, fill=color, font=("Arial", 16))

def draw_shape():
    shape = shape_var.get()
    color = shape_color_var.get()
    if shape == "Rectangle":
        canvas.create_rectangle(150, 150, 300, 300, outline="black", fill=color)
    elif shape == "Ellipse":
        canvas.create_oval(400, 150, 550, 300, outline="black", fill=color)
#clear whole table if it needed
def clear_canvas():
    canvas.delete("all")

#setting text color
def set_text_color():
    color = choose_color()
    if color:
        text_color_var.set(color)
#setting color for shape
def set_shape_color():
    color = choose_color()
    if color:
        shape_color_var.set(color)

root = tk.Tk()
root.title("Functional Color Editor")

canvas = tk.Canvas(root, width=800, height=600, bg="white")
canvas.pack(fill=tk.BOTH, expand=True)

# Variables
text_var = tk.StringVar(value="Hello, World!")
text_color_var = tk.StringVar(value="black")
shape_var = tk.StringVar(value="Rectangle")
shape_color_var = tk.StringVar(value="black")

# Widgets
button_frame = tk.Frame(root)
button_frame.pack(fill=tk.X, side=tk.BOTTOM)

tk.Label(button_frame, text="Text:").pack(side=tk.LEFT)
tk.Entry(button_frame, textvariable=text_var).pack(side=tk.LEFT)
tk.Button(button_frame, text="Choose Text Color", command=set_text_color).pack(side=tk.LEFT)

tk.Label(button_frame, text="Shape:").pack(side=tk.LEFT)
shape_menu = tk.OptionMenu(button_frame, shape_var, "Rectangle", "Ellipse")
shape_menu.pack(side=tk.LEFT)

tk.Button(button_frame, text="Choose Shape Color", command=set_shape_color).pack(side=tk.LEFT)
tk.Button(button_frame, text="Draw Shape", command=draw_shape).pack(side=tk.LEFT)
tk.Button(button_frame, text="Add Text", command=add_text).pack(side=tk.LEFT)
tk.Button(button_frame, text="Clear", command=clear_canvas).pack(side=tk.LEFT)

root.mainloop()
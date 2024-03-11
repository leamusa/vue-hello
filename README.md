# vue-hello

Description:

- Screen print a message within an h1, using the date.

# Bonus:

- Add an image from a date to the page.

# vue-hello

Description:

- Screen print a message within an h1, using the date.

# Bonus:

- Add an image from a date to the page.

# Vue Hello Project

1. **Data Properties:**

   - `message`: A message displayed in an h1 element.
   - `img`: The filename of an image.
   - `imagePath`: The path where the images are located.
   - `textColor`: The color of the text in the h1 element.

2. **Methods:**

   - `changeImage`: A method to change the displayed image by toggling (between "01.jpg" and "02.PNG")
   - `changeColor`: A method to change the text color by toggling between "red" and "purple".

3. **HTML Structure:**

   - An h1 element displaying the message with a text color that can be dynamically changed.
   - An img element displaying an image whose source is determined by the `img` property.
   - Two `buttons`: one to change the displayed image and another to change the text color.

4. **Vue Directives:**

   - `v-bind`: Used to dynamically bind the `src` attribute of the img element to the concatenated path and image filename.
   - `:style="{ color: textColor }"`: Dynamically sets the text color of the h1 element based on the `textColor` property.

5. **Bonus:**
   - the addition of a picture when changing the photo.

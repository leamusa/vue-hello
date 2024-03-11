const { createApp } = Vue;

createApp({
  data() {
    return {
      // Message displayed
      message: "Hello Vue",
      // Image path
      img: "01.jpg",
      // Path for the images
      imagePath: "./assets/img/",
      // Text color
      textColor: "red",
    };
  },
  methods: {
    // Method to change the photo
    changeImage() {
      // Bonus add a pict
      // Change the photo
      this.img = this.img === "01.jpg" ? "02.PNG" : "01.jpg";
    },
    // Method to change the text color
    changeColor() {
      // Change the text color
      this.textColor = this.textColor === "purple" ? "pink" : "purple";
    },
  },
}).mount("#app");

var slider = document.getElementById("myRange");
// var output = document.getElementById("demo2");
// output.innerHTML = slider.value; // Display the default slider value
var sliderValue = slider.value;



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  // output.innerHTML = this.value;
  // sliderValue = this.value;
  newValue = this.value / 7;


  if (this.value > 0 && this.value <= 17) {
    document.getElementById('option-1').style.display='flex';
    document.getElementById('option-2').style.display='none';
    document.getElementById('option-3').style.display='none';
    document.getElementById('option-4').style.display='none';
    document.getElementById('option-5').style.display='none';
    document.getElementById('option-6').style.display='none';
  }  
  if (this.value > 17 && this.value <= 33) {
    document.getElementById('option-1').style.display='none';
    document.getElementById('option-2').style.display='flex';
    document.getElementById('option-3').style.display='none';
    document.getElementById('option-4').style.display='none';
    document.getElementById('option-5').style.display='none';
    document.getElementById('option-6').style.display='none';
  }
  if (this.value > 33 && this.value <= 50) {
    document.getElementById('option-1').style.display='none';
    document.getElementById('option-2').style.display='none';
    document.getElementById('option-5').style.display='flex';
    document.getElementById('option-4').style.display='none';
    document.getElementById('option-3').style.display='none';
    document.getElementById('option-6').style.display='none';
  }
  if (this.value > 50 && this.value <= 67) {
    document.getElementById('option-1').style.display='none';
    document.getElementById('option-2').style.display='none';
    document.getElementById('option-3').style.display='none';
    document.getElementById('option-4').style.display='flex';
    document.getElementById('option-5').style.display='none';
    document.getElementById('option-6').style.display='none';
  }
  if (this.value > 67 && this.value <= 84) {
    document.getElementById('option-1').style.display='none';
    document.getElementById('option-2').style.display='none';
    document.getElementById('option-5').style.display='none';
    document.getElementById('option-4').style.display='none';
    document.getElementById('option-3').style.display='flex';
    document.getElementById('option-6').style.display='none';
  }
    if (this.value > 84 && this.value <= 100) {
    document.getElementById('option-1').style.display='none';
    document.getElementById('option-2').style.display='none';
    document.getElementById('option-3').style.display='none';
    document.getElementById('option-4').style.display='none';
    document.getElementById('option-5').style.display='none';
    document.getElementById('option-6').style.display='flex';

  }



  // if (this.value > 10 && this.value < 20) {
  //   document.getElementById('option-2').style.display='initial';
  // } else {
  //   document.getElementById('option-2').style.display='none';
  // }





}


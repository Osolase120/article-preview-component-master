const showBtn = document.getElementById('showbtn');
const popupDiv = document.getElementById('popupContainer');
const rectangleDiv = document.getElementsByClassName('rectangle');


showBtn.addEventListener('click', () => {
    // when button is clicked it changes div's display
    if (popupDiv.style.display === 'flex' ) {
        popupDiv.style.display = 'none'; // Hide it

        for (let i = 0; i < rectangleDiv.length; i++) {
            rectangleDiv[i].style.display = 'none';
        }
    } else {
        popupDiv.style.display = 'flex'; // Show it
        
        for (let i = 0; i < rectangleDiv.length; i++) {
            rectangleDiv[i].style.display = 'flex';
        }
    }
});
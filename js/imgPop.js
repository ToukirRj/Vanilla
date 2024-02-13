

//Projects Popup==============>
document.addEventListener('DOMContentLoaded', function() {
    var imgPopup = document.querySelector('.img-popup');
    var imgCont = document.querySelectorAll('.container__img-holder');
    var popupImage = document.querySelector('.img-popup img');
    var closeBtn = document.querySelector('.close-btn');

    imgCont.forEach(function(element) {
        element.addEventListener('click', function() {
            var img_src = this.querySelector('img').getAttribute('src');
            imgPopup.querySelector('img').setAttribute('src', img_src);
            imgPopup.classList.add('opened');
        });
    });

    function closePopup() {
        imgPopup.classList.remove('opened');
        imgPopup.querySelector('img').setAttribute('src', '');
    }

    imgPopup.addEventListener('click', closePopup);
    closeBtn.addEventListener('click', closePopup);

    popupImage.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
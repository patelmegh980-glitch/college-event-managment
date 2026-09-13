function openImage(imageSource) {
    document.getElementById("imagePopup").style.display = "flex";
    document.getElementById("popupImage").src = imageSource;
}   
function closeImage() {
    document.getElementById("imagePopup").style.display = "none";
}   

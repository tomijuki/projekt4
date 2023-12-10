

function loadPhotos() {
    let photoContainer = document.getElementById("photo-container"); 
     for (let i = 1; i <= 48; i++) {


        const imgElement = document.createElement("img");
        imgElement.src = "/public/photos1/photo" + i + ".png"; // Adjust the path as needed
        imgElement.alt = "Photo";
        imgElement.classList.add("photo"); // Add a class for styling
        photoContainer.appendChild(imgElement);
    }
}

document.addEventListener("DOMContentLoaded", loadPhotos);
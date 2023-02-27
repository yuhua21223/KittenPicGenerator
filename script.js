window.onload = function () {
    const catImage = document.getElementById('cat-image');
    const newCatBtn = document.getElementById('new-cat-btn');

    // Fetch a new cat image
    function fetchCatImage() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                const imageUrl = data[0].url;
                catImage.src = imageUrl;
            })
            .catch(error => console.error(error));
    }

    // Display a new cat image when the "New Cat" button is clicked
    newCatBtn.addEventListener('click', fetchCatImage);

    // Fetch and display an initial cat image
    fetchCatImage();
}
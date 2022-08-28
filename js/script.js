let checkSearch = function () {
    let inputValue = document.getElementById('recherche').value;
    console.log(inputValue);
    if (!inputValue) {
        $('#myModal').modal('show');
    } else {
        submitSearch(inputValue);
    }
}

let submitSearch = function (inputValue) {
    alert('formulaire soumis', inputValue);
}


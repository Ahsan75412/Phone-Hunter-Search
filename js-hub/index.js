

const searchPhone = () => {
    const searchBar = document.getElementById('search-field');
    // console.log(searchBar);
    const textSearch = searchBar.value;
    // console.log(textSearch);


     //clear data 
     searchBar.value = '';


    // data Loading dynamically Api here 

    const url = `https://openapi.programming-hero.com/api/phones?search=${textSearch}`
// console.log(url);
  

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}


// display Result Function here 

const displaySearchResult = phones => {
    // console.log(phones);
    const searchResult = document.getElementById('search-result');

    searchResult.textContent = '';

    phones.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML= `
        
        <div class="card">
        <h4 class="card-title text-center">${data.brand}</h4>
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.phone_name}</h5>
          <button type="button" class="btn btn-success">Show Detail</button>
        </div>
      </div>
        
        
        `
        searchResult.appendChild(div);

    });
}
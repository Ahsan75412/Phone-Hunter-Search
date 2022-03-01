

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
        .then(data => console.log(data));

}
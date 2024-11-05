const loadData = async(search='13')=>{
    console.log(search)
   const res = await fetch(` https://openapi.programming-hero.com/api/phones?search=${search}`);
   const data =await res.json();
   const phone = data.data
   
   displayData(phone)
}

const displayData = (phone)=>{
    console.log(phone)
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText='';
    phone.forEach(phone =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList ='card bg-base-100  shadow-xl'
        phoneCard.innerHTML =`
         <figure>
    <img
      src="${phone.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body space-y-3">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Details</button>
    </div>
  </div>
        
        
        `
        phoneContainer.appendChild(phoneCard)
    })
}

const searchBox = ()=>{
    const searchContainer =document.getElementById('search-box')
    const searchText = searchContainer.value;
    loadData(searchText);
    // console.log(searchText)
    

}
const searchBtn =()=>{
    searchBox();
   

}


loadData()
const loadData = async (search = "13") => {
  console.log(search);
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await res.json();
  const phone = data.data;

  displayData(phone);
};

const displayData = (phone) => {
  console.log(phone);
  const phoneContainer = document.getElementById("phone-container");
  const showAll =document.getElementById('show-all');
  phoneContainer.innerText = "";

if(phone.length>12){
    showAll.classList.remove('hidden')
}else{
    showAll.classList.add('hidden')
}

phone = phone.slice(0,12)










  phone.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = "card bg-base-100  shadow-xl";
    phoneCard.innerHTML = `
         <figure>
    <img
      src="${phone.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body space-y-3">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-center">
      <button onclick ="showDetails('${phone.slug}')"  class="btn btn-primary">Details</button>
    </div>
  </div>
  

        
        
        `;
    phoneContainer.appendChild(phoneCard);
  });
  toggleSpinner(false)
};

const searchBox = () => {
  const searchContainer = document.getElementById("search-box");
  const searchText = searchContainer.value;
  loadData(searchText);
  // console.log(searchText)
};
const searchBtn = () => {
    toggleSpinner(true)
  searchBox();
};

const handleShowAllBtn = (showAll)=>{
    if(showAll){
        
    }
}

const toggleSpinner =(isLoading)=>{
    const spinner = document.getElementById('toggle-spinner');
    if(isLoading){
        spinner.classList.remove('hidden')
    }else{
        spinner.classList.add('hidden')
    }
}

const showDetails =async(id)=>{
    console.log(id)
   const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
   const data = await res.json();
   const details =data.data;
   handleShowDetails(details)
}

const handleShowDetails = ()=>{
    open_modal.showModal();

    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML =`
    <p>h1</p>
    
    
    `

}

loadData();

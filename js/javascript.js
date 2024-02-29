const phoneLoad = async (inputText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
    const data = await res.json()
    const phones = data.data
    displyPhone(phones, isShowAll)
    // console.log(phones);
}
// phoneLoad()

const displyPhone = (phoneData, isShowAll) => {
    console.log(phoneData.length);
    const phoneConatner = document.getElementById('phone-container')
    phoneConatner.textContent = ''
    // console.log(phoneData.length);
    const noDataFound=document.getElementById('no-data-found')
    const noContainer=document.getElementById('no-data-container')
    if(phoneData.length<=0){
        noDataFound.innerText='No Data Found!'
        noContainer.classList.remove('hidden')
    }
    else{
        noContainer.classList.add('hidden')
    }
    console.log('rrrrrrrrrex v dfv dvdf vfdf rt:', isShowAll);
    const showBtn = document.getElementById('show-all-btn')
    if (phoneData.length > 12 && !isShowAll) {
        showBtn.classList.remove('hidden')
    }
    else {
        showBtn.classList.add('hidden')
    }
    if (!isShowAll) {
        phoneData = phoneData.slice(0, 12)
    }
    phoneData.forEach(phone => {
        // // console.log(phone);
        // console.log(phone);
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card w-96 border-2 text-center py-3 font-popins px-3`
        phoneCard.innerHTML = `
     <figure class="bg-[#0D6EFD0D] p-3 rounded-none"><img src="${phone.image}" alt="Shoes" />
                </figure>
        <div class="">
            <h2 class="text-3xl font-bold mt-3">${phone.phone_name}</h2>
            <p class="mt-3 text-[#706F6F]">There are many variations of passages of available, but the majority have suffered</p>
            <h2 class="text-3xl font-bold mt-3">$999</h2>
            <div class="card-actions justify-center mt-3">
                <button onclick="showDetlisBtn('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div
     `
        phoneConatner.appendChild(phoneCard)
    })
    lodingPage(false)
}


const searchBtn = (isShowAll) => {
    // console.log('clicked');
    lodingPage(true)
    const inputFiled = document.getElementById('input-value')
    const inputText = inputFiled.value
    // console.log(inputText);
    phoneLoad(inputText, isShowAll)
}

const lodingPage = (isLoad) => {
    const lodingBtn = document.getElementById('loding-btn')
    if (isLoad) {
        lodingBtn.classList.remove('hidden')
    }
    else {
        lodingBtn.classList.add('hidden')
    }
}


const showAllBtn = () => {
    searchBtn(true)
}

const showDetlisBtn = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    // console.log(data);
    const phones = data.data
    modalBtn(phones)
}

const modalBtn = (phones) => {
    shodetlis_btn_modal.showModal(phones)
    const modalContainer = document.getElementById('modal-container')
    // const modalDiv=document.createElement('div')
    modalContainer.innerHTML = `
    <figure class="bg-[#0D6EFD0D] p-3 rounded-none flex justify-center"><img src="${phones.image}" alt="Shoes" />
        </figure>
    <h3 class="mt-3 text-3xl font-bold text-[#403F3F]">${phones.name}</h3>
    <p class="text-[#706F6F] mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p class="text-xl text-[#706F6F] mt-3"><span class="font-semibold text-[#403F3F]">Storage:</span>${phones.mainFeatures.storage}</p>
    <p class="text-xl text-[#706F6F] mt-3"><span class="font-semibold text-[#403F3F]">Display Size:</span>${phones.mainFeatures.displaySize}</p>
    <p class="text-xl text-[#706F6F] mt-3"><span class="font-semibold text-[#403F3F]">Chipset:</span>${phones.mainFeatures.chipSet}</p>
    <p class="text-xl text-[#706F6F] mt-3"><span class="font-semibold text-[#403F3F]">Memory:</span>${phones.mainFeatures.memory}</p>
    <p class="text-xl text-[#706F6F] mt-3"><span class="font-semibold text-[#403F3F]">Slug:</span>${phones.slug}</p>
    <p class="text-xl text-[#706F6F] mt-3"><span class="font-semibold text-[#403F3F]">Release data:</span>${phones?.releaseDate}</p>
    <p class="text-xl text-[#706F6F] mt-3"><span class="font-semibold text-[#403F3F]">Brand:</span>${phones.brand}</p>
    <p class="text-xl text-[#706F6F] mt-3"><span class="font-semibold text-[#403F3F]">GPS:</span>${phones?.others?.GPS || 'No GPS avalible'}</p>

    `
    console.log(phones.others.GPS);
    // modalContainer.appendChild(modalDiv)
}
const phoneLoad = async (inputText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
    const data = await res.json()
    const phones = data.data
    displyPhone(phones)
    // console.log(phones);
}
// phoneLoad()

const displyPhone = phoneData => {

    const phoneConatner = document.getElementById('phone-container')
    phoneConatner.textContent=''

    phoneData.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card w-96 border-2 text-center py-3 font-popins`
        phoneCard.innerHTML = `
     <figure><img src="${phone.image}" alt="Shoes" />
                </figure>
        <div class="">
            <h2 class="text-3xl font-bold mt-3">${phone.phone_name}</h2>
            <p class="mt-3 text-[#706F6F]">There are many variations of passages of available, but the majority have suffered</p>
            <h2 class="text-3xl font-bold mt-3">$999</h2>
            <div class="card-actions justify-center mt-3">
                <button class="btn btn-primary">Show Details</button>
            </div>
        </div
     `
        phoneConatner.appendChild(phoneCard)
    })
}


const searchBtn = () => {
    // console.log('clicked');
    const inputFiled = document.getElementById('input-value')
    const inputText=inputFiled.value
    console.log(inputText);
    phoneLoad(inputText)
}
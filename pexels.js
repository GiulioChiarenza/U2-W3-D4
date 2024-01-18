
const Url1 = "https://api.pexels.com/v1/search?query=cat"
const Url2 = "https://api.pexels.com/v1/search?query=dog"
const buttonLoad1 = document.getElementsByClassName('btn-primary')[0]
const buttonLoad2 = document.getElementsByClassName('btn-secondary')[0]
const loadImage= function (){
    fetch(Url1, {
        headers: {
            Authorization: 'DSICRbQ1q6DLk6w8Wq3akn5SuFvZaacadoVqnULKJ8Aua5cpzLR53qCY'
        }
    })
    .then((response) => {
        if (response.ok){
            alert('UPLOADED IMAGES')
            return response.json()
        }else {
            alert('ERROR LOADING')
            throw new Error('ERROR LOADING');
        }
    })
    .then((data)=> {
        console.log(data)
        const arrayImg= []
     arrayImg.forEach((element, i) => {
            const allImg = document.getElementsByClassName('bd-placeholder-img')[i]
            if (allImg){
                element.removeAttribute('src')
                element.setAttribute('src',data.photos[i].src.medium)
            } else{
                alert('IMG NOT FOUND')
            }
        });
    })
    .catch((error)=> {
        console.log(error)
        alert('SERVER IS NOT RESPONDING')
    })
}

buttonLoad1.addEventListener('click', function(e){
    e.preventDefault()
    loadImage()
})
buttonLoad2.addEventListener('click', function(e){
    e.preventDefault()
    loadImage()
})

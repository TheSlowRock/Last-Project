let products = {
    data: [
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Taiwanese_Blue_and_White_Flip_flops_from_Lung_Mei_Beach.jpg/640px-Taiwanese_Blue_and_White_Flip_flops_from_Lung_Mei_Beach.jpg',
            price:'??$',
            name: 'Taiwannese flip-flop',
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Taiwanese_Blue_and_White_Flip_flops_from_Lung_Mei_Beach.jpg/640px-Taiwanese_Blue_and_White_Flip_flops_from_Lung_Mei_Beach.jpg',
            price:'??$',
            name: 'Taiwannese flip-flop',
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Taiwanese_Blue_and_White_Flip_flops_from_Lung_Mei_Beach.jpg/640px-Taiwanese_Blue_and_White_Flip_flops_from_Lung_Mei_Beach.jpg',
            price:'??$',
            name: 'Taiwannese flip-flop',
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Taiwanese_Blue_and_White_Flip_flops_from_Lung_Mei_Beach.jpg/640px-Taiwanese_Blue_and_White_Flip_flops_from_Lung_Mei_Beach.jpg',
            price:'??$',
            name: 'Taiwannese flip-flop',
        },
    ]
}

for(var i of products.data){
    var card = document.createElement('div');
    card.classList.add('box')
    // card.setAttribute('id', i.id    )

    let Imgcont = document.createElement('div')
    Imgcont.classList.add('image-container')
    let img = document.createElement('img')
    img.classList.add('img')
    img.setAttribute('src', i.img)
    Imgcont.appendChild(img)
    card.appendChild(Imgcont)


    let cont = document.createElement('div')
    // cont.classList.add('container2')

    let name = document.createElement('h5')
    name.classList.add('des-name')
    name.innerText = i.name.toUpperCase()

    let price = document.createElement('h5')
    price.classList.add('des-name')
    price.innerText = i.price.toUpperCase() 
    cont.appendChild(name)
    cont.appendChild(price)
    card.appendChild(cont)
    document.getElementById('most-buy').appendChild(card)
}
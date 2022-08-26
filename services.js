let listOfServices=[
    {
        name:'Blow Dry/Style',
        price:'$65'
    },
      {
        name:'condtioning treament with blow dry/style',
        price:'$120'
    },  {
        name:'Root touch Up',
        price:'$75 '
    },  {
        name:'High Lights',
        price:'$120+'
    },  {
        name:'Facials',
        price:'$120 '
    },  {
        name:' Brow wax',
        price:'$25'
    },  {
        name:'Brow Wax/ Tint',
        price:' $45'
    },  {
        name:'Bow Thread',
        price:'$30'
    },  {
        name:'Brow wax/ Tint',
        price:'$50'
    },  {
        name:'Brow Lamination',
        price:'$100'
    },  {
        name:'Brow Lamination/Tint',
        price:'$130'
    }, {
        name:'Lash Lift',
        price:'120' 
    },
]

const services = document.getElementById('services') 

services.innerHTML=''

listOfServices.forEach((service)=> {
    
    services.innerHTML+=`
        <div class="service-items mt">
                    <div class='service-name'>${service.name}</div>
                    <div class="line"></div>
                    <div class='service-price'> ${service.price} </div>
                </div>
                
                `
})

services.innerHTML+= `
<a class="button mt" href="mailto:luckypeach45@gmail.com"> Book Appointment</a>`
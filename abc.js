const form = document.querySelector('.form')
const name1 = document.querySelector('.name')
const movie1 = document.querySelector('.movie-name')
const ticket = document.querySelector('.ticket')
const cost = document.querySelector('.costs')


form.addEventListener('submit', function(e) {
    document.querySelector('.cost').innerText = ""
    e.preventDefault()
    const {name , tickets , movie} = this.elements
    if (movie.value = "movie1"){
        document.querySelector('.cost').innerText = "201"
    }
    if (movie.value = "movie2"){
        document.querySelector('.cost').innerText = "301"
    }
    if (movie.value = "movie3"){
        document.querySelector('.cost').innerText = "401"
    }
    if (movie.value = "movie4"){
        document.querySelector('.cost').innerText = "501"
    }
    if (movie.value = "movie5"){
        document.querySelector('.cost').innerText = "601"
    }
    const costt = parseInt(document.querySelector('.cost').innerText) * parseInt(tickets.value)
    document.querySelector('.costtotal').innerText = costt
    console.log(name.value)
   const para =  document.createElement('p')
   para.innerText = name.value
   name1.appendChild(para)
   const para2 =  document.createElement('p')
   para2.innerText = movie.value
   movie1.appendChild(para2)
   const para3 =  document.createElement('p')
   para3.innerText = tickets.value
   ticket.appendChild(para3)
   const para4 =  document.createElement('p')
   para4.innerText = costt
   cost.appendChild(para4)
})
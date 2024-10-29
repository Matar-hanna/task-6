fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
      .then(res => res.json())
      .then(res => books(res))

let Div=document.getElementById('f-card')
function books(res)
{
        for(let i=42;i<=res.length;i++){
Div.innerHTML +=`
<div class="row col-lg-3 col-sm-12 flex-wrap">
    <div class="d-flex justify-content-center ">
      <img src="${res[i].simple_thumb}" style=" width :75%" class="p-4 img-bg" alt="card">
    </div>
      <div  class="text-center pt-3">
        <h5 class="title">${res[i].title}</h5>
        <p>${res[i].author}</p>
      </div>
</div>`
    }
}
fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
      .then(res => res.json())
      .then(res => Book(res))
     
      let one=document.getElementById('book')

      function Book(res)
      {
    one.innerHTML=`
    <div class="flex-wrap d-flex justify-content-center  pt-5">
      <div class="row col-lg-6 col-sm-12 d-flex justify-content-center">
        <img src="${res.cover}" style="width : 50%;height :90%" class="p-2 bg-light" alt="cover"/>
      </div>
      <div class="text row col-lg-6 col-sm-12">
        <h2 class="pt-3">Best Selling Book</h2>
        <p class="pt-3">By <span>${res.authors[0].name}</span></p>
        <h5 class="pt-3">${res.title}</h5>
        <p class="pt-2">${res.fragment_data.html}</p>
        <button class=" btn-color d-bg pt-5 pb-5">View All Products-></button>
      </div>
    </div>
    `
      }
      fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
      .then(res => res.json())
      .then(res => tabs(res))

let tab=document.getElementById('tab')
function tabs(res)
{
 
for(let i=1;i<=4;i++){
tab.innerHTML +=`
<div class="row col-lg-3 ">
    <div class="d-flex justify-content-center">
      <img src="${res[i].simple_thumb}" style=" width :75%" class="p-4 img-bg" alt="card">
    </div>
      <div  class="text-center pt-3">
        <h5 class="title">${res[i].title}</h5>
        <p>${res[i].author}</p>
      </div>
</div>`
}
for(let i=5;i<=8;i++){
  tab.innerHTML +=`
  <div class=" row col-lg-3 pb-5">
      <div class="d-flex justify-content-center">
        <img src="${res[i].simple_thumb}" style=" width :75%" class="p-4 img-bg" alt="card">
      </div>
        <div  class="text-center pt-3">
          <h5 class="title">${res[i].title}</h5>
          <p>${res[i].author}</p>
        </div>
  </div>`
  }
}
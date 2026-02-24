// Recupérer l'id de l'url
const params = new URLSearchParams(document.location.search)
let idUrl = params.get('id');
console.log(idUrl)

async function getGeniArt() {
  try {
    let req = await fetch(`http://localhost:3000/api/products/${idUrl}`);

    let data = await req.json();

    const img = document.querySelector('figure img')
    img.src = data.image 
    img.alt = data.shorttitle

    const h1 = document.querySelector('div h1')
    h1.textContent = data.titre

    const p = document.querySelector('aside p')
    p.textContent = data.description

    const shortp = document.querySelector('div p')
    shortp.textContent = data.description.substr(0, 244);

    const a = document.querySelector('.button-buy')
    a.textContent = data.shorttitle

    // const article = 
    // `<h2>Description de l’oeuvre :  ${data.titre}</h2>
    // <article>
    //     <figure>
    //         <img src="${data.image}" alt="${data.shorttitle}">
    //     </figure>
    //     <div>
    //         <h1>${data.titre}</h1>
    //         <p>${data.description}</p>
    //         <div class="price">
    //             <p>Acheter pour</p>
    //             <span class="showprice">35.25€</span>
    //         </div>
    //         <div class="declinaison">
    //             <input type="number" name="quantity" id="quantity" placeholder="1" value="1" minlength="1">
    //             <select name="format" id="format">
    //             </select>
    //         </div>
    //         <a class="button-buy" href="#">Buy ${data.shorttitle}</a>
    //     </div>
    // </article>`
    // const detailoeuvre = document.querySelector('.detailoeuvre');
    // detailoeuvre.insertAdjacentHTML('beforeend', article);
    
  } catch (e) {
    console.error("Une erreur s'est produite : ", e);
  }
}
getGeniArt();
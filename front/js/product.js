// Recupérer l'id de l'url
const params = new URLSearchParams(document.location.search)
let idUrl = params.get('id');
console.log(idUrl)

async function getGeniArt() {
  try {
    let req = await fetch(`http://localhost:3000/api/products/${idUrl}`);

    let data = await req.json();

    const article = 
    `<article>
        <figure>
            <img src="${data.image}" alt="${data.shorttitle}">
        </figure>
        <div>
            <h1>${data.titre}</h1>
            <p>Plongez dans l'univers mystique de 'Bird', une œuvre d'art captivante quitranscende les limites de la réalité. Réalisée dans le style éthéré et spectral,cette pièce évoque la présence d'un oiseau envoûtant qui semble flotter dansl'au-delà. </p>
            <div class="price">
                <p>Acheter pour</p>
                <span class="showprice">35.25€</span>
            </div>
            <div class="declinaison">
                <input type="number" name="quantity" id="quantity" placeholder="1" value="1" minlength="1">
                <select name="format" id="format">
                </select>
            </div>
            <a class="button-buy" href="#">Buy bird</a>
        </div>
    </article>`
    const detailoeuvre = document.querySelector('.detailoeuvre');
    detailoeuvre.insertAdjacentHTML('beforeend', article);
    
    
  } catch (e) {
    console.error("Une erreur s'est produite : ", e);
  }
}
getGeniArt();
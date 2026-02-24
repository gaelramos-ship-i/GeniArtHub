async function getGeniArt() {
  try {
    let req = await fetch('http://localhost:3000/api/products/');

    let datas = await req.json();

    datas.forEach(data => {
      const article = 
      `<article>
        <img src="${data.image}" alt="${data.shorttitle}">
        <a href="product.html?id=${data._id}">Buy ${data.shorttitle}</a>
      </article>`
      const products = document.querySelector('.products');
      products.insertAdjacentHTML('beforeend', article);
    });
    
  } catch (e) {
    console.error("Une erreur s'est produite : ", e);
  }
}
getGeniArt();
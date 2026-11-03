describe('showProduct', () => {
  let product = {
    titre: 'Test Product',
    image: 'test-image.jpg',
    description: 'This is a test product',
    shorttitle: 'Test',
    declinaisons: [
      { taille: 'Small', prix: 10 },
      { taille: 'Medium', prix: 20 },
      { taille: 'Large', prix: 30 }
    ]
  }

  beforeEach(() => {
    // Create DOM elements for testing
    document.body.innerHTML = `
      <div class="detailoeuvre">
        <img src="" alt="">
      </div>
      <h1></h1>
      <article>
        <div>
          <p></p>
        </div>
      </article>
      <div class="showprice"></div>
      <button class="button-buy"></button>
      <h2></h2>
      <aside>
        <p></p>
      </aside>
      <select id="format"></select>
    `
  })

  it('should update the title', () => {
    showProduct(product)
    expect(document.title).toBe('Test Product - GeniArtHub')
  })

  it('should update the image', () => {
    showProduct(product)
    expect(document.querySelector('.detailoeuvre img').src).toBe('test-image.jpg')
    expect(document.querySelector('.detailoeuvre img').alt).toBe('Test Product')
  })

  it('should update the title', () => {
    showProduct(product)
    expect(document.querySelector('h1').textContent).toBe('Test Product')
  })

  it('should update the short description', () => {
    showProduct(product)
    expect(document.querySelector('article > div > p').textContent).toBe('This is a test product...')
  })

  it('should update the price', () => {
    showProduct(product)
    expect(document.querySelector('.showprice').textContent).toBe('10€')
  })

  it('should update the buy button', () => {
    showProduct(product)
    expect(document.querySelector('.button-buy').textContent).toBe('Buy Test')
  })

  it('should update the description title', () => {
    showProduct(product)
    expect(document.querySelector('h2').textContent).toBe('Description de l\'oeuvre : Test Product')
  })

  it('should update the long description', () => {
    showProduct(product)
    expect(document.querySelector('aside > p').textContent).toBe('This is a test product')
  })

  it('should update the select options', () => {
    showProduct(product)
    expect(document.querySelector('#format').innerHTML).toBe(`
      <option data-id="0" value="Small">Format : Small</option>
      <option data-id="1" value="Medium">Format : Medium</option>
      <option data-id="2" value="Large">Format : Large</option>
    `)
  })

  it('should update the price when select option is changed', () => {
    showProduct(product)
    const select = document.querySelector('#format')
    select.selectedIndex = 1
    select.dispatchEvent(new Event('change'))
    expect(document.querySelector('.showprice').textContent).toBe('20€')
  })
})
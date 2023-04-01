// fetch menu items from json file
function fetchMenuItems() {
  fetch('https://github.com/SateSate/Nepsli/blob/main/js/products.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // display menu items
      displayMenuItems(data)
    })
    .catch((error) => console.log(error))
}

// display menu items
function displayMenuItems(menuItems) {
  const products = document.querySelector('#products')
  let displayMenu = menuItems
    .map(function (item, index) {
      let menuItemsMarkup = item.menuItem
        .map(function (menuItem) {
          return `
          <div class="mad-spec-item">
            <div class="mad-spec-info">
              <div class="mad-spec-header">
                <div class="mad-spec-title">
                  ${menuItem.name}
                  <span class="mad-label">
                    <img src="yummi_svg_icons/carrot.svg" alt="" class="svg" />
                  </span>
                </div>
                <div class="mad-line"></div>
                <div class="mad-spec-price">${menuItem.price}</div>
              </div>
              <div class="mad-spec-tags">
                <div class="mad-spec-el">${menuItem.description}</div>
              </div>
            </div>
          </div>
        `
        })
        .join('')

      let imageBlock = `
        <div class="col-xl-6 order-${index % 2 === 0 ? 2 : 1}">
          <figure class="mad-img">
            <img src="${item.categoryImage}" alt="" />
          </figure>
        </div>
      `

      let textBlock = `
        <div class="col-xl-6 order-${index % 2 === 0 ? 1 : 2}">
          <!-- Our Specifications -->
          <div class="mad-specs">
            <h2 class="mad-page-title">${item.categoryName}</h2>
            <div class="mad-col">
              ${menuItemsMarkup}
            </div>
          </div>
        </div>
      `

      return `
        <div class="row no-gutters">
          ${index % 2 === 0 ? imageBlock + textBlock : textBlock + imageBlock}
        </div>
      `
    })
    .join('')

  products.innerHTML = displayMenu
}

fetchMenuItems()

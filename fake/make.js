const fs = require('fs');
const faker = require('faker');

const qty = {
    products: 600,
    categories: 8,
    related: 20,
};

const data = {
    store: {
        company: 'React Commerce LTDA',
        phone: '+55 11 0000-0000',
        email: 'exemple@domain.com',
    },
    categories: [],
    products: [],
};

const mathRandom = n => {
    return Math.floor(Math.random() * n);
};

const randomProducts = () => {
    const n = mathRandom(qty.related);
    return new Array(n).fill(null).map(e => (e = mathRandom(qty.products)));
};

const randomCategory = () => {
    const n = mathRandom(qty.categories);
    return new Array(n).fill(null).map(e => (e = mathRandom(qty.categories)));
};

const randomGallery = () => {
    return new Array(6).fill(null).map(e => (e = faker.image.imageUrl()));
};

const discounts = [10, 15, 30, 55];

const getSpecialPrice = price => {
    const index = Math.floor(Math.random() * discounts.length);
    return price - (price * discounts[index]) / 100;
};

for (let i = 1; i <= qty.products; i++) {
    const product = {
        id: i + 1,
        title: faker.commerce.productName(),
        qty: Math.floor(Math.random() * 1000),
        price: faker.commerce.price(),
        short_description: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        thumbnail: faker.image.imageUrl(),
        gallery: randomGallery(),
        categories: randomCategory(),
        related: randomProducts(),
    };

    if (Math.random() >= 0.8) {
        product.special_price = getSpecialPrice(product.price);
    }

    data.products.push(product);
}

for (let i = 1; i <= qty.categories; i++) {
    data.categories.push({
        id: i + 1,
        title: faker.commerce.department(),
        short_description: faker.lorem.sentence(),
    });
}

fs.writeFile('data.json', JSON.stringify(data, null, '\t'), err => {
    if (err) throw err;
    console.log('Saved!');
});

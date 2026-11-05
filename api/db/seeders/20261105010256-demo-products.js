'use strict';

const { PRODUCT_TABLE } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        id: 1,
        name: 'Samsung Galaxy A54 Smartphone',
        description:
          'Smartphone with a 6.4-inch AMOLED display, 128GB storage, and a 50MP camera.',
        price: 349,
        image: 'https://picsum.photos/seed/smartphone-samsung-a54/400/400',
        category_id: 1,
        created_at: '2026-11-04T10:15:22.000Z',
      },
      {
        id: 2,
        name: 'Lenovo IdeaPad 3 Laptop',
        description:
          'Laptop with Intel Core i5 processor, 8GB RAM, and 512GB SSD, ideal for work and study.',
        price: 649,
        image: 'https://picsum.photos/seed/laptop-lenovo-ideapad3/400/400',
        category_id: 1,
        created_at: '2026-11-04T10:20:45.000Z',
      },
      {
        id: 3,
        name: 'Sony WH-1000XM4 Bluetooth Headphones',
        description:
          'Headphones with active noise cancellation, up to 30 hours of battery life, and high-resolution audio.',
        price: 229,
        image: 'https://picsum.photos/seed/headphones-sony-xm4/400/400',
        category_id: 1,
        created_at: '2026-11-04T10:25:10.000Z',
      },
      {
        id: 4,
        name: 'LG 55" 4K Smart TV',
        description:
          'UHD TV with HDR technology, webOS system, and voice control.',
        price: 549,
        image: 'https://picsum.photos/seed/smart-tv-lg-55/400/400',
        category_id: 1,
        created_at: '2026-11-04T10:30:33.000Z',
      },
      {
        id: 5,
        name: '10th Generation iPad Tablet',
        description:
          'Apple tablet with a 10.9-inch display, A14 Bionic chip, 64GB storage, and Liquid Retina screen.',
        price: 449,
        image: 'https://picsum.photos/seed/ipad-10gen/400/400',
        category_id: 1,
        created_at: '2026-11-04T10:35:58.000Z',
      },
      {
        id: 6,
        name: '3-Seater Sectional Sofa',
        description:
          'Modern 3-seater sofa in stain-resistant fabric, wooden frame, and high-density foam cushions.',
        price: 399,
        image: 'https://picsum.photos/seed/sofa-seccional-3p/400/400',
        category_id: 2,
        created_at: '2026-11-04T10:40:12.000Z',
      },
      {
        id: 7,
        name: 'Dining Table with 6 Chairs',
        description:
          'Solid wood table with a natural finish and 6 upholstered chairs, ideal for large spaces.',
        price: 579,
        image: 'https://picsum.photos/seed/mesa-comedor-6s/400/400',
        category_id: 2,
        created_at: '2026-11-04T10:45:37.000Z',
      },
      {
        id: 8,
        name: 'Queen Size Bed with Headboard',
        description:
          'Wooden bed with upholstered headboard, includes base and box spring. Mattress not included.',
        price: 449,
        image: 'https://picsum.photos/seed/cama-queen/400/400',
        category_id: 2,
        created_at: '2026-11-04T10:50:01.000Z',
      },
      {
        id: 9,
        name: 'L-Shaped Desk with Shelving',
        description:
          'L-shaped desk with side shelving, spacious surface, and cable organizer.',
        price: 189,
        image: 'https://picsum.photos/seed/escritorio-l/400/400',
        category_id: 2,
        created_at: '2026-11-04T10:55:24.000Z',
      },
      {
        id: 10,
        name: '4-Door Wardrobe with Mirror',
        description:
          '4-door wardrobe with mirror, 2 drawers, and a hanging rod. Matte white finish.',
        price: 299,
        image: 'https://picsum.photos/seed/closet-4p/400/400',
        category_id: 2,
        created_at: '2026-11-04T11:00:49.000Z',
      },
      {
        id: 11,
        name: 'Oversize Cotton T-Shirt',
        description:
          'Oversize 100% combed cotton t-shirt, crew neck, and relaxed fit. Available in several colors.',
        price: 19,
        image: 'https://picsum.photos/seed/camiseta-oversize/400/400',
        category_id: 3,
        created_at: '2026-11-04T11:05:13.000Z',
      },
      {
        id: 12,
        name: "Men's Skinny Jeans",
        description:
          'Skinny jeans in stretch denim, five pockets, and button closure. Slim fit.',
        price: 32,
        image: 'https://picsum.photos/seed/jean-skinny-h/400/400',
        category_id: 3,
        created_at: '2026-11-04T11:10:36.000Z',
      },
      {
        id: 13,
        name: 'Faux Leather Jacket',
        description:
          'Biker-style faux leather jacket, interior lining, and asymmetrical zipper. Unisex.',
        price: 64,
        image: 'https://picsum.photos/seed/chaqueta-cuero/400/400',
        category_id: 3,
        created_at: '2026-11-04T11:15:58.000Z',
      },
      {
        id: 14,
        name: 'Floral Midi Dress',
        description:
          'Midi dress with floral print, adjustable straps, and flared skirt. Lightweight fabric for warm weather.',
        price: 41,
        image: 'https://picsum.photos/seed/vestido-midi/400/400',
        category_id: 3,
        created_at: '2026-11-04T11:20:21.000Z',
      },
      {
        id: 15,
        name: 'Nike Running Shoes',
        description:
          'Sports shoes with React cushioning, breathable mesh, and non-slip rubber outsole.',
        price: 89,
        image: 'https://picsum.photos/seed/zapatillas-nike/400/400',
        category_id: 3,
        created_at: '2026-11-04T11:25:44.000Z',
      },
      {
        id: 16,
        name: '18k Gold Ring with Diamond',
        description:
          '18k yellow gold ring with a 0.25-carat center diamond and polished finish.',
        price: 749,
        image: 'https://picsum.photos/seed/anillo-oro-diamante/400/400',
        category_id: 4,
        created_at: '2026-11-04T11:30:07.000Z',
      },
      {
        id: 17,
        name: 'Silver Necklace with Pearl',
        description:
          '925 sterling silver necklace with an 8mm cultured pearl and adjustable 45cm chain.',
        price: 119,
        image: 'https://picsum.photos/seed/collar-plata-perla/400/400',
        category_id: 4,
        created_at: '2026-11-04T11:35:29.000Z',
      },
      {
        id: 18,
        name: 'Cubic Zirconia Earrings',
        description:
          'Long earrings with cubic zirconia in rhodium plating, pressure clasp, and elegant design.',
        price: 49,
        image: 'https://picsum.photos/seed/aretes-zirconia/400/400',
        category_id: 4,
        created_at: '2026-11-04T11:40:52.000Z',
      },
      {
        id: 19,
        name: 'Stainless Steel Bracelet',
        description:
          'Stainless steel bracelet with gold finish, adjustable links, and security clasp.',
        price: 34,
        image: 'https://picsum.photos/seed/pulsera-acero/400/400',
        category_id: 4,
        created_at: '2026-11-04T11:45:15.000Z',
      },
      {
        id: 20,
        name: 'Wristwatch with Leather Strap',
        description:
          'Analog watch with steel case, mineral crystal, and genuine leather strap. Water-resistant 3ATM.',
        price: 99,
        image: 'https://picsum.photos/seed/reloj-cuero/400/400',
        category_id: 4,
        created_at: '2026-11-04T11:50:38.000Z',
      },
    ]);
  },

  async down(queryInterface) {

    await queryInterface.bulkDelete(PRODUCT_TABLE, null, {});
  },
};

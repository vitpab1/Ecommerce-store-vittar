const data = [
  {
    id: 1,
    image:
      "https://www.redcandy.co.uk/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/d/o/doiy-rainbow-plant-pot.1575456342.jpg",
    title: "placeholder pot 1",
    description: "producto placeholder 1",
    category: "common pot",
    price: "$4000",
    stock: 5,
  },
  {
    id: 2,
    image:
      "https://www.redcandy.co.uk/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/d/o/doiy-rainbow-plant-pot.1575456342.jpg",
    title: "placeholder pot 2",
    description: "producto placeholder 2",
    category: "common pot",
    price: "$4000",
    stock: 5,
  },
  {
    id: 3,
    image:
      "https://www.redcandy.co.uk/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/d/o/doiy-rainbow-plant-pot.1575456342.jpg",
    title: "placeholder pot 3",
    description: "producto placeholder 3",
    category: "common pot",
    price: "$4000",
    stock: 5,
  },
];

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default getProducts;

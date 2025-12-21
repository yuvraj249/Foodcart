
const FOOD_DATA = [
  {
    title: 'Chinese',
    items: [
       {
    id: 1,
    name: "Noodles",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s",
    price: 25
  },
  {
    id: 2,
    name: "Manchurian",
    imageUrl: "https://storage.googleapis.com/cscom-2019.appspot.com/uploads/2018/08/Cabbage-Manchurian.jpg",
    price: 18,
  },
  {
    id: 3,
    name: "Pho",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Ph%E1%BB%9F_b%C3%B2_%2839425047901%29.jpg",
    price: 35,
  },
  {
    id: 4,
    name: "Chicken Fried Rice",
    imageUrl: "https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg",
    price: 25,
  },
  {
    id: 5,
    name: "Chicken Chilly",
    imageUrl: "https://maunikagowardhan.co.uk/wp-content/uploads/2014/11/Indo-Chinese-Chilli-Chicken1-1024x683.jpg",
    price: 18,
  },
  {
    id: 6,
    name: "Hakka Noodles",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHI6vHr6V8yiVoYNezh3ViC4ZcCD7U_0kuuw&s",
    price: 14,
  },
  {
    id: 7,
    name: "Egg Fried Rice",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JI7E4rwNQEwgPJnuJxDL0etbZ05WuMBlzw&s",
    price: 18,
  },
  {
    id: 8,
    name: "Manchurian Noodles",
    imageUrl: "https://i.ytimg.com/vi/MhiWI1bmbh0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC8Z3sYjCmmMJDdihxQStU6nhmFmA",
    price: 14,
  },
  {
    id: 9,
    name: "Manchrurian Rice",
    imageUrl: "https://i.ytimg.com/vi/KSmI5jkBQFw/maxresdefault.jpg",
    price: 16,
  },
    ],
  },
  {
    title: 'Indian',
    items: [
      {
        id: 10,
        name: 'Butter Chicken',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV63GxWAHb33p2UPzz-Ki-a80D5jenc36Lvg&s',
        price: 22,
      },
      {
        id: 11,
        name: 'Butter Paneer',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GMD_WH9sl6HjJ4CObB9Lim-51zBji9n5KA&s',
        price: 28,
      },
      {
        id: 12,
        name: 'Paneer Tikka',
        imageUrl: 'https://c.ndtvimg.com/2024-07/rvdidqqo_paneer-tikka_120x90_01_July_24.jpg',
        price: 11,
      },
      {
        id: 13,
        name: 'Chicken Tikka',
        imageUrl: 'https://www.krumpli.co.uk/wp-content/uploads/2024/11/Chicken-Tikka-Kebab-Skewers-2-1600-720x405.jpg',
        price: 16,
      },
      {
        id: 14,
        name: 'Garlic Naan',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiJIjgaFQ0J4AfKUyhNEhTZxK6qaHko71oA&s',
        price: 16,
      },
      {
        id: 15,
        name: 'Dal Rice',
        imageUrl: 'https://cdn.indiaphile.info/wp-content/uploads/2023/02/stp-dal-chawal-7654.jpg?width=1200&crop_gravity=center&aspect_ratio=auto&q=75',
        price: 16,
      },
      {
        id: 16,
        name: 'Dal Makhni',
        imageUrl: 'https://sinfullyspicy.com/wp-content/uploads/2015/03/1200-by-1200-images-1-500x375.jpg',
        price: 19,
      },
      {
        id: 17,
        name: 'Aalo paratha',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg',
        price: 20,
      },
    ],
  },
  {
    title: 'Japanese',
    items: [
      {
        id: 18,
        name: 'Sushi',
        imageUrl: 'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/sanjeev-kapoor/media/media_files/2025/08/05/fried-sushi-yt-2025-08-05-11-37-18.jpg',
        price: 125,
      },
      {
        id: 19,
        name: 'Ramen',
        imageUrl: 'https://san-j.com/wp-content/uploads/2023/01/Shoyu-Ramen-crop2.jpg',
        price: 90,
      },
      {
        id: 20,
        name: 'Tempura',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pJ0Ni8CgbNXkw7noV0uTBCYX1rytp_KMMQ&s',
        price: 90,
      },
      {
        id: 21,
        name: 'Tonkatsu',
        imageUrl: 'https://int.japanesetaste.com/cdn/shop/articles/Katsu_Curry_cover_photo.jpg?v=1751944249&width=600',
        price: 165,
      },
      {
        id: 22,
        name: 'Japanese Platter',
        imageUrl: 'https://assets.telegraphindia.com/telegraph/e88a70e3-564f-4ef8-b211-89876db9b62f.jpg',
        price: 185,
      },
    ],
  },
  {
    title: 'Italian',
    items: [
      {
        id: 23,
        name: 'Pizza',
        imageUrl: 'https://experiencebellavita.com/wp-content/uploads/2022/08/ebv-types-of-pizza-blog-001-1-850x425.jpg',
        price: 25,
      },
      {
        id: 24,
        name: 'Alfredo Paasta',
        imageUrl: 'https://www.justspices.co.uk/media/recipe/chicken-alfredo.jpg',
        price: 20,
      },
      {
        id: 25,
        name: 'lasagna',
        imageUrl: 'https://assets.bonappetit.com/photos/57adf3c353e63daf11a4dfa2/master/w_1280%2Cc_limit/lasagna-bolognese.jpg',
        price: 80,
      },
      {
        id: 26,
        name: 'Risotto',
        imageUrl: 'https://cdn.jwplayer.com/v2/media/49emAtrw/thumbnails/2yYpPiJ0.jpg?width=1280',
        price: 80,
      },
      {
        id: 27,
        name: 'Tiramisu',
        imageUrl: 'https://www.giallozafferano.com/images/260-26067/Tiramisu_1200x800.jpg',
        price: 45,
      },
      {
        id: 28,
        name: 'Garlic Bread',
        imageUrl: 'https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-master768.jpg',
        price: 135,
      },
      {
        id: 29,
        name: 'Bruschetta',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigwP9pa9CfYrIPdf3hQ5IT6p9KcMEGSeQeQ&s',
        price: 20,
      },
    ],
  },
  {
    title: 'Mexican',
    items: [
      {
        id: 30,
        name: 'Tacos',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nHG02s92DPIjxyRlhseB3Tg9Q7xSdBpyCQ&s',
        price: 325,
      },
      {
        id: 31,
        name: 'Burrito',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/1200px-Burrito.JPG',
        price: 20,
      },
      {
        id: 32,
        name: 'Quesadilla',
        imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2021/03/Vegetable-Quesadilla-Recipe-1-1200.jpg',
        price: 25,
      },
      {
        id: 33,
        name: 'Guacamole',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eFLsmqm2EgcvV7kPCzq8OJOq94SG970ZGQ&s',
        price: 25,
      },
      {
        id: 34,
        name: 'Enchiladas',
        imageUrl: 'https://www.perfectitaliano.com.au/content/dam/perfectitaliano-aus/recipe/0_desktop/Desktop-Easy-Beef-Enchiladas.jpg',
        price: 40,
      },
      {
        id: 35,
        name: 'Mexican Bowl',
        imageUrl: 'https://www.shutterstock.com/image-photo/homemade-healthy-chicken-burrito-bowl-600nw-1894600540.jpg',
        price: 25,
      },
    ],
  },
];


export default FOOD_DATA
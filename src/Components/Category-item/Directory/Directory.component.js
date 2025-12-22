
import './directory.styles.scss'
import CategoryItem from "../Category-item.component"

const categories = [
    {
      id: 1,
      title: "Chinese",
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPvcZIxeA9bZukK18CymY32OqFUTVbkKXgQ&s',
      route: 'order/Chinese'
      
    },
    {
      id: 2,
      title: "Mexican",
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xHeazHuC_nZPxa6DfzVaouuigLyZ-TvoHQ&s',
      route: 'order/Mexican'
    },
    {
      id: 3,
      title: "Indian",
      imageUrl:'https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64ecfa1fad20286493de9568_r094aj5e10gjt9vzy87jjw7s3dq9xvy1.jpeg',
      route: 'order/Indian'
    },
    {
      id: 4,
      title: "Japanese",
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyZwzv1QXfZ9bAsKP16yrF7ymFUc-8-VroQ&s',
      route: 'order/Japanese'
    },
    {
      id: 5,
      title: "Italian",
      imageUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      route: 'order/Italian'
    },

  ]


const Directory = () => {
  
  return (
   <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />

      ))}
    </div>
  )
}

export default Directory
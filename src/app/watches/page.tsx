import React from 'react'
import Image from 'next/image'

const Watches = () => {
const watchData = [
  {id: 1, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/rolex.jpg'},
  {id: 2, name: 'Omega', price: 8000, description: 'Sporty design', image: '/omega2.jpg'},
  {id: 3, name: 'Patek Philippe', price: 25000, description: 'Elegant timepiece', image: '/patek.jpg'},
  {id: 4, name: 'TAG Heuer', price: 5000, description: 'Sporty and stylish', image: '/tag heuer.jpg'},
  {id: 5, name: 'Breitling', price: 7000, description: 'Bold and rugged', image: '/breitling.jpg2.jpg'},
  {id: 6, name: 'Seiko', price: 1000, description: 'Affordable and reliable', image: '/seko3.jpg'},
]



  return (
    <div>
      <div className='watches'>
        {watchData.map((watch) => (
          <div key={watch.id} className='watch-card'>
            <Image src={watch.image} alt={watch.name} 
            height={200}
            width={200}/>
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className='price'>${watch.price}</div>
            <button>Add to Card</button>

          </div>
         
        ))}
      </div>
    </div>
  )
}

export default Watches

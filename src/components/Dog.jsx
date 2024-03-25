import React from 'react'

const Dog = () => {
    const [Dog, setDog] = useState()
    const url = 'https://dog.ceo/api/breeds/image/random'
    fetch(url)
    


  return (
    <div>Dog</div>
  )
}

export default Dog
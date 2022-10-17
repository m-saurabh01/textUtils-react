import React from 'react'

export default function About(props) {
  // const [myCustom, setMyCustom] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   padding: '1vw',
  // })
  // const [btnText, setBtnText] = useState('Enable Dark mode')

  // const toggleStyle = () => {
  //   if (myCustom.color === 'black') {
  //     setMyCustom({
  //       color: 'white',
  //       backgroundColor: 'grey',
  //     })
  //     setBtnText('Disable Dark mode')
  //   } else {
  //     setMyCustom({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     })
  //     setBtnText('Enable Dark mode')
  //   }
  // }

  return (
    <>
      {/* <div className="container">
        <button className="btn btn-primary my-2" onClick={toggleStyle}>
          {btnText}
        </button>
      </div>*/}
      <div
        className="container p-2"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h4>{props.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare
          tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor
          nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros
          est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis
          pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris
          a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut,
          aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et
          interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt.
          Curabitur consectetur dolor libero, at aliquam est ornare eleifend.
          Aliquam at finibus dolor
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quod,
          voluptatibus qui doloribus perspiciatis explicabo quasi? Molestiae hic
          illo, voluptates earum officiis accusantium sunt atque mollitia illum
          ullam sit laborum? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Officia sequi magnam quae voluptate, rem neque ullam consectetur
          rerum cumque minima ratione mollitia saepe minus culpa nesciunt
          eligendi in quod! Voluptate. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Culpa officiis repudiandae, ab quae voluptates
          dolorum at quod aliquid, doloremque veritatis totam. Magni nihil
          deleniti labore facilis itaque. Reprehenderit, veritatis ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          nostrum. Architecto eum error ipsam voluptate quas asperiores
          repellendus vel, libero doloribus debitis dolorum odit soluta!
          Quisquam natus ratione iusto tempora.
        </p>
      </div>
    </>
  )
}

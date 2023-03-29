import "../App.css"

const Masum = ({propsIcınBoyleYapiyoruz}) => {

  console.log("ilk prop:", propsIcınBoyleYapiyoruz);
  return (
    <div>
      Masum componenti denemesi
      <br />
      Ayrıca gelen props'u şöyle kullanıyoruz: {propsIcınBoyleYapiyoruz}
    </div>
  )
}

export default Masum;
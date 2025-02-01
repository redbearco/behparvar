import Link from "next/link";

const Section4 = () => {
  return (
    <div id="about" className="col-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column align-items-center">
      <header className="d-flex justify-content-center">
        <h3 className="text-center custom-color-red mb-4">
          تماس با ما
        </h3>
      </header>
      <ul className="d-flex flex-column justify-content-center">
        <li className="mb-3 d-flex flex-column justify-content-center">
          <header className="mb-3 d-flex justify-content-center">
            <h4 className="text-white">دفتر تهران: </h4>
          </header>
          <Link className="text-white text-center" href="tel:02154196000">
            02154196000
          </Link>
        </li>
        <li className="mb-3 d-flex flex-column justify-content-center">
          <header className="mb-3 d-flex justify-content-center">
            <h4 className="text-white t">دفتر رشت: </h4>
          </header>
          <Link className="text-white text-center" href="tel:">
            01332571535
          </Link>
        </li>
        <li className="mb-3 d-flex flex-column justify-content-center">
          <header className="mb-3 d-flex justify-content-center">
            <h4 className="text-white">دفتر ارومیه: </h4>
          </header>
          <Link className="text-white text-center" href="tel:04432226038">
            04432226038
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Section4;
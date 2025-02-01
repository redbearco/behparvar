import Link from "next/link";

const Section3 = () => {
  return (
    <div className="col-12 col-md-12 col-lg-2 col-xl-2 d-flex flex-column align-items-center">
      <header className="d-flex justify-content-center">
        <h3 className="text-center custom-color-red mb-4">
          برندهای ما
        </h3>
      </header>
      <ul className="d-flex flex-column justify-content-center">
        <li className="mb-3 d-flex justify-content-center">
          <Link className="text-white" href="/?tab=desc#Section4">
            جوجه یکروزه
          </Link>
        </li>
        <li className="mb-3 d-flex justify-content-center">
          <Link  className="text-white"href="/bita">
            مرغ بی تا
          </Link>
        </li>
        <li className="mb-3 d-flex justify-content-center">
          <Link className="text-white" href="/odi">
            مرغ odi
          </Link>
        </li>
        <li className="d-flex justify-content-center">
          <Link className="text-white" href="sahar">
            مرغ سحر
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Section3;
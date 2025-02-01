import Link from "next/link";

const Section2 = () => {
  return (
    <div className="col-12 col-md-12 col-lg-2 col-xl-2 d-flex flex-column align-items-center">
      <header className="d-flex justify-content-center">
        <h3 className="text-center custom-color-red mb-4">
          دسترسی سریع
        </h3>
      </header>
      <ul className="d-flex flex-column justify-content-center">
        <li className="mb-3 d-flex justify-content-center">
          <Link className="text-white" href="/">
            صفحه اصلی
          </Link>
        </li>
        <li className="mb-3 d-flex justify-content-center">
          <Link className="text-white" href="/tolid">
            زنجیره تولید
          </Link>
        </li>
        <li className="mb-3 d-flex justify-content-center">
          <Link className="text-white" href="/tolid">
            مشارکت در تولید
          </Link>
        </li>
        <li className="mb-3 d-flex justify-content-center">
          <Link className="text-white" href="/aboutus">
            درباره ما
          </Link>
        </li>
        <li className="mb-3 d-flex justify-content-center">
          <Link className="text-white" href="contactus">
            تیم ما
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Section2;
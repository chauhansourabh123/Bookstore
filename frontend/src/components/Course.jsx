import list from "../../public/list.json";
import { Link } from "react-router-dom"

const Course = () => {
  return (
    <>
      <div className={`container mx-auto p-4 md:px-12 max-w-screen-2xl mt-24`}>
        <div className="flex flex-col items-center text-center gap-y-12">
          <h1 className="text-4xl font-semibold">
            We're delighted to have you{" "}
            <span className="text-red-200">Here! :)</span>
          </h1>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab
            asperiores veniam cupiditate optio, accusantium quidem magnam quam
            est distinctio sit expedita, blanditiis, dolore vitae et porro!
            Expedita velit facere magnam itaque consectetur tenetur quidem!
            Iusto facere natus necessitatibus commodi cumque, earum libero
            aspernatur dolorem nobis tempora? Molestias, officia consequatur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            provident?
          </p>
          <Link
            className="bg-red-200 w-24 px-6 py-2 rounded font-semibold hover:bg-red-300 duration-100"
            to="/"
          >
            Back
          </Link>
        </div>
        <div className="flex md:flex-row gap-y-6 md:gap-x-6 flex-col flex-wrap justify-center p-4">
          {list.map((list) => (
            <div
              key={list.id}
              className="card hover:scale-105 duration-150 bg-base-50 w-full md:w-96 shadow-xl border border-slate-50"
            >
              <figure>
                <img src={list.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {list.name}!
                  <div className="badge badge-secondary">
                    {list.category === "free" ? "free" : "Purchase"}
                  </div>
                </h2>
                <p>{list.title}</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">&#8377;{list.price}</div>
                  <div className="badge badge-outline cursor-pointer">
                    Buy now
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

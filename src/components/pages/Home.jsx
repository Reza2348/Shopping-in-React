import IMG from "../../assets/img/screen-0.webp";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-10">
      <div className="flex-1 text-center lg:text-left space-y-6 mt-8 lg:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Explore Shopedia
          <br />
          with
          <span className="text-blue-500 px-3 py-1">Real-Time Data</span>
        </h1>
        <p className="text-black max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
          Discover details about every country around the Shopedia <br /> from
          capitals to regions!
        </p>
        <Link
          to="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-sm font-semibold transition duration-300"
        >
          Explore Now
        </Link>
      </div>

      <div className="flex-1 relative w-full max-w-sm sm:max-w-md mb-10 lg:mb-0">
        <div className="relative z-10 rounded-md overflow-hiddenmt-14">
          <img src={IMG} alt="IMG" className="w-full h-auto rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Home;

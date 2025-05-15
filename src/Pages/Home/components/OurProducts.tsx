import { BiGitCompare, BiHeart, BiShare } from "react-icons/bi";
import { getImageUrl } from "../../../Utils/FetchImage";
import { CgShoppingCart } from "react-icons/cg";

const OurProducts = () => {
  // interface ShareText{
  //   text: 'share' | 'compare' | 'likes';

  // }
  interface ProductTypes {
    image: string;
    name: string;
    description: string;
    price: string;
    offer: string | null;
  }

  const products: ProductTypes[] = [
    {
      image: getImageUrl("Syltherine.png"),
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      offer: "-30%",
    },
    {
      image: getImageUrl("Leviosa.png"),
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      offer: null,
    },
    {
      image: getImageUrl("Lolito.png"),
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      offer: "-50%",
    },
    {
      image: getImageUrl("Respira.png"),
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      offer: "New",
    },
    {
      image: getImageUrl("Grifo.png"),
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      offer: null,
    },
    {
      image: getImageUrl("Muggo.png"),
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      offer: "new",
    },
    {
      image: getImageUrl("Pingky.png"),
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      offer: "-50%",
    },
    {
      image: getImageUrl("Potty.png"),
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 7.240.000",
      offer: "New",
    },
  ];
  return (
    <div className="  w-full  flex items-center justify-center  py-10 flex-col gap-5 ">
      <h1 className=" text-2xl md:text-4xl font-bold text-text-300 text-center mb-5">
        Our Products
      </h1>
      <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-10">
        {products.map((product, index) => {
          return (
            <section key={index} className=" relative inline-block group">
              <div className=" h-auto bg-card rounded w-full">
                <div className=" relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" rounded"
                  />
                  <div
                    className={`absolute top-1 right-2 rounded-full h-10 w-10 flex items-center justify-center text-white text-sm ${
                      product.offer?.includes("-")
                        ? product.offer !== null
                          ? "bg-red-400"
                          : ""
                        : product.offer !== null
                        ? "bg-green-600"
                        : ""
                    }`}>
                    {product.offer}
                  </div>
                  <div className="  absolute  bg-black/50 rounded  scale-95 opacity-0 bottom-0 left-0 right-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 translate-y-20 group-hover:translate-y-0 top-0">
                    <div className=" px-5  mt-40 ">
                      <div className=" flex items-center justify-center">
                        <button className=" flex items-center justify-center gap-2  bg-primary py-3 px-4 rounded text-secondary mb-2 cursor-pointer">
                          Add to cart <CgShoppingCart />
                        </button>
                      </div>
                      <div className=" flex justify-between  h-full  pb-15 text-white gap-2 text-sm">
                        <button className=" gap-1 flex items-center cursor-pointer ">
                          <BiShare /> Share
                        </button>
                        <button className=" gap-1 flex items-center cursor-pointer ">
                          <BiGitCompare /> Compare
                        </button>
                        <button className=" gap-1 flex items-center cursor-pointer ">
                          <BiHeart /> Like
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-4 py-2">
                  <h1 className="  font-bold text-text-300">{product.name}</h1>
                  <p className=" text-text-100">{product.description}</p>
                  <h1 className="  font-bold text-text-300">{product.price}</h1>
                </div>
              </div>
            </section>
          );
        })}
      </section>
      <button className=" border cursor-pointer border-secondary rounded px-10 py-2 text-secondary hover:bg-secondary hover:text-white transition-all duration-500 ">
        Show More
      </button>
    </div>
  );
};

export default OurProducts;

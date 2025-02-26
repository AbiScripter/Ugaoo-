import packages from "../assets/About/package.avif";
import replace from "../assets/About/replace.avif";
import selfPot from "../assets/About/selfpot.avif";
import subscription from "../assets/Subscription.webp";
import parentReward from "../assets/parent-reward.webp";

const recycleData = [
  { img: packages, title: "Secure and Recyclable Packaging" },
  { img: selfPot, title: "Free Replacements if Damaged" },
  { img: replace, title: "Self-Watering Pots with Every Plant" },
];

const About = () => {
  return (
    <div>
      <div className="py-10 px-2" style={{ backgroundColor: "#eff8f2" }}>
        {/* Reusable Icons */}
        <h1 className="text-primary-dark font-semibold text-2xl text-center pb-6">
          Why Ugaoo
        </h1>
        <div className="flex gap-10">
          {recycleData.map((re) => {
            return (
              <div
                key={re.title}
                className="flex flex-col items-center justify-center"
              >
                <img src={re.img} className="h-12" />
                <p className="text-black text-xs text-center">{re.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-black text-center p-4 flex flex-col gap-4 py-6">
        <h1 className="text-2xl font-light">
          Experience the magic of growing plants
        </h1>
        <p className="text-center text-sm">
          Ugaoo is here to inspire you to have plants around you. To look at
          life in a very different way, helping you connect with nature. Each
          plant you buy is packed and shipped with care, from our 25-acre farm
          to your doorstep.
        </p>
      </div>

      {/* Subscription */}
      <div
        className="px-4 py-8 flex flex-col items-center justify-center"
        style={{ backgroundColor: "#eff8f2" }}
      >
        <img src={subscription} alt="subscription-gig" />
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-primary-dark text-2xl">Plant Subscriptions</h2>
          <p className="text-black text-center text-sm">
            Receive a curated box of handpicked plants, packaged with care,
            every month.
          </p>
          <button className="bg-primary p-2 px-8 rounded-sm font-semibold text-white text-sm">
            EXPLORE BOXES
          </button>
        </div>
      </div>

      <div className="px-4 py-8" style={{ backgroundColor: "#eff8f2" }}>
        <img
          src={parentReward}
          className="object-cover h-96 w-full"
          alt="subscription-gig"
        />
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-primary-dark text-2xl text-center">
            Join our Plant Parent Rewards Club
          </h2>
          <p className="text-black text-center text-sm">
            Every plant purchase is a gift that keeps on giving. Earn coins and
            redeem them for exclusive discounts.
          </p>
          <div className="flex gap-2 items-center text-sm">
            <button className="bg-primary p-2 w-40 rounded-sm font-semibold text-white">
              LEARN MORE
            </button>
            <button className="bg-primary p-2 w-40 rounded-sm font-semibold text-white">
              REFER A FRIEND
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-center py-6">
        <h2 className="text-2xl text-primary-dark">About Ugaoo</h2>
        <p className="text-black text-sm">
          As India’s largest and most trusted online plant nursery and gardening
          store, Ugaoo is here to bring you only the best for all your gardening
          and plant needs. From exotic indoor plants for your homes to flowering
          plants and succulents for your ornamental gardens, we bring you all
          the plants you may want! We also specialize in the highest quality
          seeds, organic fertilizers, premium pots and planters, and garden
          tools for effective plant care. So, turn a new leaf and start your
          gardening journey with Ugaoo!
        </p>
      </div>
    </div>
  );
};

export default About;

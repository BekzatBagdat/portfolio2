import auctionBestBids from '../img/auctionbestbids.jpg';
import reactshop from '../img/reactshop.jpg';
import holidize from '../img/holidize.jpg';
const ProjectsSection = () => {
  return (
    <section className="mt-24 p-8">
      <h3 className="text-3xl font-bold text-black mb-10 fade-in2">
        Projects💻
      </h3>
      <div className="flex flex-wrap gap-8 justify-between">
        {/* Auction Project */}
        <div className="w-full md:w-1/3 mb-10 slide-in-left">
          <img
            src={auctionBestBids}
            alt="Auction Best Bids"
            className="w-full h-64 object-contain mb-4"
          />
          <h4 className="text-xl font-bold mb-2">Auction Best Bids</h4>
          <p className="text-lg text-black mb-3">
            This is an online auction platform where users can add items to be
            auctioned and place bids on items listed by other users.
          </p>
          <p className="text-lg text-black mb-3">
            Upon signing up, new users receive 1000 credits, which can be used
            to participate in bidding on available items. Users can also earn
            credits by selling their own items.
          </p>
          <p className="text-lg text-black mb-3">
            Non-registered users have the ability to browse and search through
            the listings but cannot participate in bidding. The site was crafted
            with Vanilla Javascript and Bootstrap
          </p>
          {/* Live and GitHub buttons */}
          <div className="mt-10 flex justify-between">
            <a
              href="https://github.com/BekzatBagdat/auction-best-bids"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue text-white py-2 px-4 rounded"
            >
              GitHub
            </a>
            <a
              href="https://auctionbestbids-bekzatbagdat.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red text-white py-2 px-4 rounded mr-4"
            >
              Live
            </a>
          </div>
        </div>
        {/* React Shop Project */}
        <div className="w-full md:w-1/3 mb-10 slide-in-right">
          <img
            src={reactshop}
            alt="Bekzats React Shop"
            className="w-full h-64 object-contain mb-4"
          />
          <h4 className="text-xl font-bold mb-2">React Online Shop</h4>
          <p className="text-lg text-black mb-3">
            This is a e-commerce application that showcases a list of products.
          </p>
          <p className="text-lg text-black mb-3">
            It includes an intuitive look-ahead search bar that dynamically
            filters products as users type. Each product has a dedicated
            individual product page, displaying detailed information fetched
            from an API.
          </p>
          <p className="text-lg text-black mb-3">
            On the product page, users can add items to their cart with a
            &quot;Add to Cart&quot; button, and the cart dynamically updates to
            display the total cost of all selected products. The site was
            crafted with React and Tailwind CSS
          </p>
          {/* Live and GitHub buttons */}
          <div className="mt-10 flex justify-between">
            <a
              href="https://github.com/BekzatBagdat/bekzats-react-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue text-white py-2 px-4 rounded"
            >
              GitHub
            </a>
            <a
              href="https://bekzatsreactshop.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red text-white py-2 px-4 rounded mr-4"
            >
              Live
            </a>
          </div>
        </div>
       
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

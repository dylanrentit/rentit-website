import { useParams, Link } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();

  const blogContent = {
    "rent-out-your-stuff-nz": {
      title:
        "How to Rent Out Your Stuff in New Zealand (and Earn Extra Income)",
      date: "22 Sept 2025",
      readTime: "6 min read",
      intro:
        "Have unused gear sitting around the house? From bikes and cameras to tools and tents, thousands of Kiwis are earning extra income by renting out items they already own. Here’s how you can get started — safely, smartly, and profitably.",
      image: "/images/rent-out-gear.png", // swap with content bank / stock
      sections: [
        {
          heading: "Why Renting Out Your Stuff Makes Sense",
          body: "We all have items collecting dust — that DSLR camera you bought for a trip, the electric drill you only use twice a year, or that road bike that spends more time in the garage than on the road. Instead of letting them depreciate, you can turn them into assets that generate cash flow. Renting gives you an extra income stream, makes smarter use of your assets, reduces waste, and connects you with people in your community."
        },
        {
          heading: "What You Can Rent Out",
          body: "Just about anything with demand and value can be rented. On platforms like Rent It, the most popular categories include bicycles and e-bikes, cameras and drones, tools and DIY gear, camping and outdoor equipment, and party or event gear. A good rule of thumb: start with items you already own that cost over $200 new. High-ticket items rent faster and at better daily rates."
        },
        {
          heading: "How to List Items Safely",
          body: "Take clear, well-lit photos to make your listing stand out. Write an honest description that includes the brand, model, and any quirks. Set a fair price by checking similar listings (most items rent for 5–10% of their retail value per day). Rent It automatically holds a bond and provides insurance, so your gear is protected. Finally, arrange clear pickup and return times with renters — and check ID for high-value items."
        },
        {
          heading: "How Much Can You Earn?",
          body: "Earnings depend on the item, rental rate, and demand. For example: a $1,200 camera at $40/day can bring in $200 from just 5 rentals. A $2,000 mountain bike at $60/day can make $480 in 8 rentals. Even smaller items like a $250 drill can earn $150 with 10 bookings. Multiply that across multiple items, and you can easily cover bills, save for a trip, or build a reliable side hustle."
        },
        {
          heading: "Overcoming Common Concerns",
          body: "Worried about damage? Rent It’s bond and insurance cover you. Concerned about items not being returned? Verification and platform mediation safeguard lenders. Not sure if anyone will rent your stuff? Start with popular categories like bikes, tools, and cameras, and make your listing shine with good photos and clear descriptions."
        },
        {
          heading: "Tips for Maximising Your Rentals",
          body: "Bundle items together, like a tent with sleeping bags or a camera with a tripod. Respond quickly to rental requests to increase your chances of confirmation. Keep your profile trusted by completing details, verifying ID, and collecting positive reviews. Promote seasonally: camping gear in summer, ski gear in winter."
        },
        {
          heading: "Real-Life Example",
          body: "Sarah from Auckland listed her spare DSLR camera on Rent It. She set the price at $35/day with a $200 bond. In her first month, she had three bookings, earning $105. Six months later, she’s made over $700 from one camera she wasn’t using. Multiply that by a garage full of underused gear, and the potential becomes clear."
        },
        {
          heading: "How to Get Started",
          body: "Sign up on Rent It, create your first listing with photos and details, set your price and availability, then approve requests and hand over the gear. Rent It handles payments, bonds, and protection while you earn money from items you already own."
        },
        {
          heading: "Final Thoughts",
          body: "Renting out your stuff in New Zealand is more than just a way to earn extra cash — it’s a smarter, more sustainable way of living. Whether you’ve got a spare bike, unused power tools, or camping gear sitting in the garage, Rent It makes it safe and simple to turn them into income."
        }
      ]
    }
    ,"rent-camping-gear-nz": {
  title: "The Ultimate Guide to Renting Camping Gear in New Zealand",
  date: "23 Sept 2025",
  readTime: "7 min read",
  intro:
    "Planning a camping trip but don’t want to spend hundreds on equipment? Renting camping gear in New Zealand has never been easier. Here’s everything you need to know to save money, travel light, and enjoy the outdoors stress-free.",
  image: "/images/camping-guide.png", // replace with content bank/stock
  sections: [
    {
      heading: "Why Rent Instead of Buy?",
      body: "Buying camping equipment can be expensive — and for many people, it only gets used once or twice a year. Renting saves you money, reduces storage headaches, and lets you access high-quality gear without the upfront cost. Plus, it’s a sustainable choice that helps reduce overconsumption."
    },
    {
      heading: "What Camping Gear Can You Rent?",
      body: "On Rent It, you’ll find everything from the essentials to the extras: tents, sleeping bags, cooking stoves, backpacks, camping chairs, and even kayaks or fishing gear. Specialty items like rooftop tents and portable power stations are also available — perfect for weekend getaways."
    },
    {
      heading: "Where to Rent Camping Gear in New Zealand",
      body: "Big cities like Auckland, Wellington, and Christchurch have plenty of local listings. Rent It connects you directly with nearby lenders so you can pick up gear close to your trip. Whether you’re heading to a DOC campsite, a beach weekend, or a mountain trek, there’s likely someone in your area renting what you need."
    },
    {
      heading: "Tips for a Smooth Camping Rental",
      body: "Book early if you’re travelling during peak season (summer holidays and long weekends fill up fast). When you pick up gear, check that everything is in working condition and ask the lender about setup if you’re unsure. Always return items clean and on time to avoid late fees and keep your profile trusted."
    },
    {
      heading: "How Much Does It Cost?",
      body: "Pricing depends on the item and location, but most tents rent for around $20–30 per night, while sleeping bags average $10–15. Renting a full kit (tent, bags, stove) can cost a fraction of buying new, especially for short trips. The more items you bundle, the more value you get."
    },
    {
      heading: "Sustainable Travel Choice",
      body: "Renting keeps items in use longer, reducing the environmental impact of manufacturing and waste. It also makes outdoor adventures more accessible for students, travellers, and families who might not want to buy gear they’ll rarely use."
    },
    {
      heading: "Final Thoughts",
      body: "Camping in New Zealand is one of the best ways to enjoy the outdoors, and renting gear makes it affordable and easy. Whether you’re a seasoned hiker or a first-time camper, Rent It connects you with the equipment you need to make your trip a success."
    }
  ]
}, "why-renting-is-smarter-nz": {
  title: "Why Renting is Smarter than Buying: Save Money and Reduce Waste",
  date: "24 Sept 2025",
  readTime: "6 min read",
  intro:
    "Buying isn’t always the smartest move. Renting helps you save money, reduce waste, and live more sustainably — here’s why more Kiwis are choosing to rent instead of own.",
  image: "/images/rent-vs-buy.png", // replace with stock/content bank
  sections: [
    {
      heading: "The Financial Benefits of Renting",
      body: "Buying new items requires big upfront costs. Renting allows you to only pay for what you actually use. For example, a $1,200 camera might be used twice a year — renting it for $40 a day is far cheaper than owning it outright. The same applies to tools, camping gear, and even electronics."
    },
    {
      heading: "Flexibility and Freedom",
      body: "Renting gives you the ability to try before you buy. Need a drone for a weekend shoot? Rent it. Want to test an e-bike before committing? Rent it. This flexibility prevents buyer’s remorse and means you’re not stuck with gear you don’t really need long term."
    },
    {
      heading: "Sustainability and Waste Reduction",
      body: "Every new item manufactured leaves an environmental footprint. Renting extends the lifecycle of products and reduces the demand for unnecessary production. By choosing to rent, you help cut down on waste and contribute to a more circular economy in New Zealand."
    },
    {
      heading: "Less Clutter, More Space",
      body: "Homes quickly fill up with things we barely use. Renting allows you to access items when you need them and return them when you don’t. That means less storage space taken up by bulky equipment — and more room for the things you use every day."
    },
    {
      heading: "When Renting Makes the Most Sense",
      body: "High-cost, low-use items are the best candidates for renting. Think of cameras, tools, camping gear, musical instruments, or party equipment. If you only use it occasionally, renting will almost always be the smarter choice."
    },
    {
      heading: "Final Thoughts",
      body: "Renting instead of buying is no longer just a budget hack — it’s a lifestyle shift. It saves money, reduces waste, and keeps life simpler. For students, travellers, families, or anyone looking to live smarter, Rent It makes it easy to find what you need, when you need it, without the commitment of ownership."
    }
  ]
}


    // Add more blog entries here...
  };

  const post = blogContent[slug];
  if (!post) return <p className="text-center">Blog not found.</p>;

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-16 items-center">
        <div>
          <span className="inline-block bg-gray-200 text-sm px-3 py-1 rounded-full mb-4">
            Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{post.intro}</p>
          <p className="text-sm text-gray-500">
            {post.date} &nbsp; | &nbsp; {post.readTime}
          </p>
        </div>
        <div>
          <img
            src={post.image}
            alt={post.title}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Body Section */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {post.sections.map((sec, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{sec.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{sec.body}</p>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
          <p className="text-xl font-bold mb-4">
            Ready to earn from your gear?
          </p>
          <Link
            to="/"
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            List your first item on Rent It →
          </Link>
        </div>
      </div>
    </div>
  );
}

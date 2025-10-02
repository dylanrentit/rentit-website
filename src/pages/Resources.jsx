import { Link } from "react-router-dom";

export default function Resources() {
  const posts = [
    {
      slug: "rent-out-your-stuff-nz",
      title: "How to Rent Out Your Stuff in New Zealand (and Earn Extra Income)",
      intro:
        "Have unused gear sitting around? From bikes and cameras to tools and tents, everyday New Zealanders are earning steady income by renting out items they already own. Here’s how you can get started.",
      image: "/images/rent-out-gear.png"
    },
    {
      slug: "rent-camping-gear-nz",
      title: "The Ultimate Guide to Renting Camping Gear in New Zealand",
      intro:
        "Planning a camping trip but don’t want to spend hundreds on equipment? Renting camping gear in New Zealand has never been easier. Here’s everything you need to know to save money, travel light, and enjoy the outdoors stress-free.",
      image: "/images/camping-guide.png"
    },
    {
      slug: "why-renting-is-smarter-nz",
      title: "Why Renting is Smarter than Buying: Save Money and Reduce Waste",
      intro:
        "Buying isn’t always the smartest move. Renting helps you save money, reduce waste, and live more sustainably — here’s why more Kiwis are choosing to rent instead of own.",
      image: "/images/rent-vs-buy.png"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Resources & Guides
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn how to rent smarter, save more, and cut down on waste with Rent
          It. Our guides share practical tips for listing your gear, finding
          affordable rentals, and making sustainable choices every day.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/resources/${post.slug}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.intro}</p>
              <span className="text-purple-600 font-semibold">Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Team() {
  const teamMembers = [
    {
      name: "Alex Trux",
      role: "Founder & Lead Developer",
      bio: "Coffee addict who writes code that sometimes works. Believes sleep is optional.",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sam Pixel",
      role: "Design Wizard",
      bio: "Turns caffeine into pixels. Can debate color theory for hours.",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jordan Byte",
      role: "Community Manager",
      bio: "Professional meme curator. Speaks fluent GIF and emoji.",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Taylor Code",
      role: "Backend Developer",
      bio: "Turns coffee into code. Debugging expert who talks to rubber ducks.",
      avatar: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-[#181F35] dark:bg-[#0D1425] rounded-lg overflow-hidden border border-[#22D1F8]/20 hover:border-[#22D1F8] transition-all hover:-translate-y-2 duration-300"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#22D1F8]/20 to-[#FF4EA3]/20">
            <img
              src={member.avatar || "/placeholder.svg"}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm text-[#22D1F8] mb-2">{member.role}</p>
            <p className="text-sm text-[#abc4ff] dark:text-[#d1e0ff]">
              {member.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

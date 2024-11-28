import { SocialWall } from "@/components/social-wall";

const samplePosts = [
  {
    id: "1",
    author: {
      name: "Sarah Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Just finished my morning workout! 💪 Feeling energized and ready for the day ahead. #fitness #motivation",
    image: "/placeholder.svg?height=400&width=400",
    likes: 124,
    comments: 8,
    timestamp: "2h ago",
  },
  {
    id: "2",
    author: {
      name: "Mike Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Beautiful sunset at the beach today! 🌅 Nature never fails to amaze me.",
    image: "/placeholder.svg?height=400&width=400",
    likes: 89,
    comments: 5,
    timestamp: "4h ago",
  },
  {
    id: "3",
    author: {
      name: "Emily Parker",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Just launched my new portfolio website! Check it out and let me know what you think 🚀",
    likes: 56,
    comments: 12,
    timestamp: "6h ago",
  },
  {
    id: "4",
    author: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Coffee and code - the perfect combination ☕️💻 #developerlife",
    image: "/placeholder.svg?height=400&width=400",
    likes: 145,
    comments: 10,
    timestamp: "8h ago",
  },
  // Added more posts to demonstrate scrolling
  {
    id: "5",
    author: {
      name: "Lisa Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Learning something new every day! 📚 #neverstoplearning",
    image: "/placeholder.svg?height=400&width=400",
    likes: 78,
    comments: 15,
    timestamp: "10h ago",
  },
  {
    id: "6",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "7",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "8",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "9",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "61",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "62",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "64",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "66",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "68",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "69",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
  {
    id: "690",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Amazing concert last night! 🎸 Still can't believe how great it was!",
    image: "/placeholder.svg?height=400&width=400",
    likes: 234,
    comments: 45,
    timestamp: "12h ago",
  },
];

export default function Page() {
  return <SocialWall posts={samplePosts} />;
}

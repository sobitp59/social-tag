"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import { type Post } from "../types/social-wall";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  console.log(`POSTCARD ${JSON.stringify(post)}`);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="flex-row items-center gap-4 space-y-0">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.timestamp}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">{post.content}</p>
          {post.image && (
            <div className="relative aspect-square overflow-hidden rounded-md">
              <img
                src={post.image}
                alt="Post image"
                className="object-cover"
                width={400}
                height={400}
              />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="flex gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span className="text-sm">{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{post.comments}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

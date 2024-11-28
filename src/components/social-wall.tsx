"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { type SocialWallProps } from "../types/social-wall";
import { PostCard } from "./post-card";

export function SocialWall({ posts = [] }: SocialWallProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ top: 1, behavior: "smooth" });

        // Reset scroll to top when reached bottom
        if (
          scrollRef.current.scrollHeight - scrollRef.current.scrollTop ===
          scrollRef.current.clientHeight
        ) {
          scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }, 50); // Adjust speed by changing the interval

    return () => clearInterval(intervalId);
  }, []);

  if (!Array.isArray(posts)) {
    return (
      <div className="container mx-auto p-4">
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="text-muted-foreground">Invalid posts data</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="text-muted-foreground">No posts to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container relative mx-auto">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left"
        style={{ scaleX }}
      />
      <div
        ref={scrollRef}
        className="grid max-h-[800px] gap-4 overflow-y-auto p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}

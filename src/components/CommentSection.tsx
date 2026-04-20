"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { User, MessageSquare } from "lucide-react";

interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Daniel Robertson",
      text: "This is a fantastic read! Totally agree with the point about generative AI making mockups faster.",
      date: "2 days ago"
    }
  ]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    
    const newComment: Comment = {
      id: Date.now(),
      name,
      text,
      date: "Just now",
    };
    
    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div className="mt-16 pt-10 border-t border-muted/20">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <MessageSquare className="text-[var(--color-accent)]" /> 
        Discussion ({comments.length})
      </h3>

      {/* Add Comment Form */}
      <div className="bg-muted/5 p-6 md:p-8 rounded-2xl border border-muted/20 mb-10">
        <h4 className="font-semibold mb-4 text-lg">Leave a Reply</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="Your Name" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-muted/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-shadow"
            />
          </div>
          <div>
            <label htmlFor="comment" className="sr-only">Comment</label>
            <textarea 
              id="comment"
              placeholder="Join the conversation..." 
              required
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-muted/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-shadow resize-none"
            />
          </div>
          <Button type="submit" disabled={!name.trim() || !text.trim()}>
            Post Comment
          </Button>
        </form>
      </div>

      {/* Comment List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4 p-6 bg-background rounded-2xl border border-muted/10 shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                <User size={20} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold text-foreground">{comment.name}</h5>
                <span className="text-xs text-muted font-medium">{comment.date}</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

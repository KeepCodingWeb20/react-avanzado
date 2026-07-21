"use client";

import { useOptimistic, useTransition } from "react";
import { likeProject } from "../dashboard/actions";

type LikeButtonProps = {
  projectId: number;
  likes: number;
};

export function LikeButton({
  projectId,
  likes: initialLikes,
}: LikeButtonProps) {
  const [_, startTransition] = useTransition();
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes, // Estado Real (Source of Truth)
    (state: number, newLike: number) => state + newLike, // Reducer
  );

  return (
    <button
      onClick={async () => {
        startTransition(async () => {
          try {
            addOptimisticLike(1);
            await likeProject(projectId);
          } catch (error) {
            console.error(error);
          }
        });
      }}
    >
      ♥ {optimisticLikes}
    </button>
  );
}

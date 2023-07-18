import React from "react";

function AvatarCandidate({ imageUrl, size }) {
  let avatarSize = "w-12 h-12";
  if (size === "large") {
    avatarSize = "w-32 h-32";
  }

  return (
    <img src={imageUrl} alt="Avatar" className={`rounded-full ${avatarSize}`} />
  );
}

export default AvatarCandidate;

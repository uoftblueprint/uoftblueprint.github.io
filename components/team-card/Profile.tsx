"use client";

import { Center, Avatar, Text, Anchor } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "@mantine/core/styles.layer.css";
import "./Profile.css";

interface ProfileProps {
  name: string;
  role: string;
  profilePicture: string;
  linkedinLink?: string;
}

const DEFAULT_AVATAR = "members/blu-scarf.png";

function Profile({
  name,
  role,
  profilePicture,
  linkedinLink = "",
}: ProfileProps) {
  const small = useMediaQuery("(max-width: 500px)");
  const avatarSize = small ? "70px" : "120px";
  const isDefaultAvatar = !profilePicture;
  const avatarSrc = profilePicture || DEFAULT_AVATAR;
  const imageProps = isDefaultAvatar
    ? { style: { objectPosition: "top", objectFit: "cover" as const } }
    : {};

  return (
    <Center className="center-container">
      {linkedinLink ? (
        <Anchor href={linkedinLink} target="_blank">
          <Avatar size={avatarSize} src={avatarSrc} imageProps={imageProps} />
        </Anchor>
      ) : (
        <Avatar size={avatarSize} src={avatarSrc} imageProps={imageProps} />
      )}

      <Text className="profile-text" id="name">
        {name}
      </Text>
      <Text className="profile-text" id="role">
        {role}
      </Text>
    </Center>
  );
}

export default Profile;

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

function Profile({
  name,
  role,
  profilePicture,
  linkedinLink = "",
}: ProfileProps) {
  const small = useMediaQuery("(max-width: 500px)");
  const avatarSize = small ? "70px" : "120px";

  return (
    <Center className="center-container">
      {linkedinLink ? (
        <Anchor href={linkedinLink} target="_blank">
          <Avatar size={avatarSize} src={profilePicture} />
        </Anchor>
      ) : (
        <Avatar size={avatarSize} src={profilePicture} />
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

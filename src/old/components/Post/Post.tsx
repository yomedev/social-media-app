import Image from "next/image";
import { Avatar } from "../Avatar";
import { Caption } from "../Caption";
import { Cell } from "../Cell";
import { IconButton } from "../IconButton";
import { BookmarkIcon, CommentIcon, EllipsisIcon, HeartIcon } from "../Icons";
import { Text } from "../Text";
import "./Post.scss";
import { ButtonGroup } from "../ButtonGroup";
import users from "../../data/users.json";
import { Spacing } from "../Spacing";
import { useState } from "react";

type PostProps = {
  postId: string;
  userId: string;
  imageUrl: string;
  content: string;
  likes: string[];
  createdAt: string;
};

export default function Post({
  postId,
  userId,
  imageUrl,
  content,
  likes,
  createdAt,
}: PostProps) {
  const user = users.find((userItem) => userItem.userId === userId);

  return (
    <div className="post">
      <Cell
        before={<Avatar src={user?.profilePicture as string} alt="test" />}
        after={
          <IconButton>
            <EllipsisIcon width={16} height={16} fill="#A8A8A8" />
          </IconButton>
        }
        subtitle={<Caption>@{user?.username}</Caption>}
      >
        <Text weight="1">{user?.fullname}</Text>
      </Cell>
      <Spacing />
      <Text>{content}</Text>
      <Spacing />
      <Image
        className="post__image"
        src={imageUrl}
        alt="post"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Cell
        after={
          <IconButton>
            <BookmarkIcon fill="#A8A8A8" width={16} height={16} />
          </IconButton>
        }
      >
        <ButtonGroup gap={10}>
          <IconButton>
            <HeartIcon width={16} height={16} fill="#A8A8A8" />
          </IconButton>
          <IconButton>
            <CommentIcon width={16} height={16} fill="#A8A8A8" />
          </IconButton>
        </ButtonGroup>
      </Cell>
    </div>
  );
}

import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useSWR from "swr";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const HeaderBtn = styled(Button)`
  position: relative;
  font-size: 16px;
  &::after {
    content: "";
    height: 2px;
    width: 0;
    border-radius: 4px;
    position: absolute;
    bottom: 4px;
    margin: auto;
    background-color: #3b49df;
    transition: width 0.2s ease-in-out;
  }
  &:hover {
    color: #3b49df;
    &::after {
      width: 70%;
    }
  }
  &:focus {
    box-shadow: none;
  }
`;

const ActiveHeaderBtn = styled(HeaderBtn)`
  &::after {
    content: "";
    height: 2px;
    width: 70%;
    border-radius: 4px;
    background-color: #3b49df;
    position: absolute;
    bottom: 4px;
    margin: auto;
  }
`;

const fetcher = (url: string) => fetch(url).then(res => res.json());

export interface Posts {
  id: number;
  title: string;
  path: string;
  comments_count: number;
  public_reactions_count: number;
  reading_time: number;
  user: User;
  main_image: string;
  tag_list: string[];
  readable_publish_date: string;
}

export interface User {
  name: string;
  profile_image_url: string;
}

export interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  fallback: any;
}

function Feed({ active, setActive, fallback }: Props): JSX.Element {
  const timePeriods = ["Feed", "Week", "Month", "Year", "Infinity", "Latest"];
  const url = `https://dev.to/stories/feed/${active.toLowerCase()}`;
  const { data, error } = useSWR(url, fetcher, fallback);

  if (error) return <Box>failed to load</Box>;

  if (!data)
    Array.from({ length: 5 }, (_, index) => index + 1).map((item: number) => (
      <>
        <SkeletonCard key={item} />
      </>
    ));

  return (
    <Box>
      <Stack direction="row" alignItems="center" mb={1}>
        <Typography variant="h6" mr="auto" fontWeight="bold">
          Posts
        </Typography>
        {timePeriods.map(item =>
          item === active ? (
            <ActiveHeaderBtn key={item} variant="text">
              {item}
            </ActiveHeaderBtn>
          ) : (
            <HeaderBtn key={item} variant="text" onClick={() => setActive(item)}>
              {item}
            </HeaderBtn>
          )
        )}
      </Stack>
      {data?.map((post: Posts) => (
        <Card
          key={post.id}
          title={post.title}
          username={post.user.name}
          tagList={post.tag_list}
          readingTime={post.reading_time}
          commentCount={post.comments_count}
          reactionCount={post.public_reactions_count}
          postLink={`https://dev.to${post.path}`}
          publishedDate={post.readable_publish_date}
          userProfile={post.user.profile_image_url}
          headerImage={post.main_image}
        />
      ))}
    </Box>
  );
}

export default Feed;

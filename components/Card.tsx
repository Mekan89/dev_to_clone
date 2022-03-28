/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  Button,
  Card as MuiCard,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export type CardProps = {
  key: number;
  title: string;
  username: string;
  tagList: string[];
  readingTime: number;
  commentCount: number;
  reactionCount: number;
  postLink: string;
  publishedDate: string;
  userProfile: string;
  headerImage: string;
};

export default function Card({
  title,
  username,
  tagList,
  readingTime,
  commentCount,
  reactionCount,
  postLink,
  publishedDate,
  userProfile,
  headerImage,
}: CardProps) {
  return (
    <Link href={postLink} sx={{ cursor: "pointer" }} underline="none" target="_blank">
      <MuiCard sx={{ mb: 2 }}>
        {headerImage && <CardMedia component="img" height={273} alt="card image" image={headerImage} />}
        <CardHeader
          titleTypographyProps={{ fontSize: 14, color: grey[800] }}
          subheaderTypographyProps={{ variant: "caption" }}
          avatar={<Avatar alt={username} src={userProfile} sx={{ width: 35, height: 35 }} />}
          title={username}
          subheader={publishedDate}
        />
        <CardContent sx={{ pr: 2, ml: 6, pt: 0, mt: -1 }}>
          <Link
            href={postLink}
            variant="h4"
            fontWeight="bold"
            mb={1}
            sx={{ cursor: "pointer", display: "block" }}
            underline="none"
            color="black">
            {title}
          </Link>
          {tagList.map(tag => (
            <Link key={tag} variant="body2" underline="none" mr={1} sx={{ cursor: "pointer" }} color={grey[700]}>
              #{tag}
            </Link>
          ))}

          <Stack direction="row" ml={-1} mt={1}>
            <Button startIcon={<img alt="likes" src="/assets/like.svg" />}>{reactionCount} reactions</Button>
            <Button startIcon={<img alt="comments" src="/assets/comment.svg" />}>{commentCount} comments</Button>
            <Stack direction="row" alignItems="center" ml="auto">
              <Typography variant="caption" mr={1} display={{ xs: "none", sm: "block" }}>
                {readingTime} min read
              </Typography>
              <Button variant="contained" color="inherit" size="small" sx={{ minWidth: "40px" }}>
                Save
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </MuiCard>
    </Link>
  );
}

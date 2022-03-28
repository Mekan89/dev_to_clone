import { Box, Skeleton, Stack } from "@mui/material";

const SkeletonCard = () => (
  <Stack mb={3} boxShadow={3} borderRadius={1}>
    <Box mt={-8}>
      <Skeleton height="290px" />
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} mt={-5} p={2}>
        <Skeleton width={35} height={35} variant="circular" />
        <Stack spacing={1} sx={{ minWidth: "92%" }}>
          <Skeleton width="100%" />
          <Skeleton width="100%" />
        </Stack>
      </Stack>
      <Stack justifyContent="space-between" direction="row" ml={6} spacing={2} px={2} pb={1}>
        <Stack direction="row">
          <Skeleton width="45px" height="35px" sx={{ mr: 1 }} />
          <Skeleton width="45px" height="35px" />
        </Stack>
        <Stack direction="row">
          <Skeleton width="45px" height="35px" sx={{ mr: 1 }} />
          <Skeleton width="45px" height="35px" />
        </Stack>
      </Stack>
    </Box>
  </Stack>
);

export default SkeletonCard;

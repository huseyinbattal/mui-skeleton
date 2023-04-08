import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";

interface Props {
  loading: boolean;
  res: string;
}

export const BoxMui = (Props: Props) => {
  const { loading, res } = Props;
  return (
    <Box sx={{ width: "300px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={300}
          height={200}
          animation="wave"
        />
      ) : (
        <img src={res} alt="skeleton" width={300} height={200} />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton variant="circular" width={50} height={40} />
        ) : (
          <Avatar sx={{ backgroundColor: "red" }}>MU</Avatar>
        )}
        <Stack sx={{ width: "100%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography
                sx={{ color: "green", marginTop: "0.5rem" }}
                variant="body1"
              >
                Material-UI Skeleton
              </Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

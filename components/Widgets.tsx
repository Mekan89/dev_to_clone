import { Divider, Link, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

function Widgets({ see, title }: { see?: boolean; title: string }) {
  return (
    <Stack bgcolor="#fff" p={1.5} spacing={1} mb={2}>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        {see && (
          <Link href="#" variant="subtitle2" fontSize="13px" underline="none">
            See all
          </Link>
        )}
      </Box>
      <Divider />
      <Typography>Javascript developer looking for remote work</Typography>
      <Typography variant="caption" color={grey[700]}>
        forhire
      </Typography>
      <Divider />
      <Typography>Building Progressive Web Apps Hands - on Workshop - 4/29 1pm ET (GMT -4)</Typography>
      <Typography variant="caption" color={grey[700]}>
        events
      </Typography>
      <Divider />
      <Typography>Want to know how a JavaScript framework works under the hood?</Typography>
      <Typography variant="caption" color={grey[700]}>
        education
      </Typography>
    </Stack>
  );
}

export default Widgets;

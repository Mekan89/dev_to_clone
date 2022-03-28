import Button from "@mui/material/Button";

function Links({ title, img }: { title: string; img?: string }) {
  return (
    <Button
      disableRipple
      fullWidth
      // eslint-disable-next-line @next/next/no-img-element
      startIcon={img && <img src={img} alt={title} />}
      sx={{ justifyContent: "flex-start", fontSize: "16px" }}>
      {title}
    </Button>
  );
}

export default Links;

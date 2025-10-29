import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 3,
        background: "linear-gradient(90deg, #0d0d0d, #1a1a1a)",
        color: "#bbb",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} <strong>MoviesApp</strong> 🎬 | All Rights Reserved
      </Typography>

      <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
        Built with ❤️ using React, Redux, and Material UI.
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Link
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ color: "#e50914", fontWeight: 500 }}
        >
          Data powered by TMDB API
        </Link>
      </Box>

      {/* 👇 Added Developer Credit */}
      <Typography variant="body2" sx={{ mt: 1, color: "#777" }}>
        Developed by <strong>Sathish</strong> | Made with 💻 + ☕
      </Typography>
    </Box>
  );
}
export default Footer;

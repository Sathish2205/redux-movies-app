import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Tooltip,
} from "@mui/material";
import ExplicitIcon from '@mui/icons-material/Explicit';
import HowToRegIcon from "@mui/icons-material/HowToReg";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FavMovieCard({ movie }) {
  const { original_title, poster_path, release_date, vote_count, popularity, adult } =
    movie;

  return (
    <Grid  item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: 280,
          borderRadius: 3,
          boxShadow: 4,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 8,
          },
        }}
      >
        <Box  sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="350"
            image={poster_path}
            alt={original_title}
            sx={{
              objectFit: "cover",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />
          {/* Gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              color: "white",
              p: 1.5,
            }}
          >
            <Typography variant="subtitle1" fontWeight={600} noWrap>
              {original_title}
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ textAlign: "left", p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            📅 <strong>Release:</strong> {release_date || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            🌟 <strong>Popularity:</strong> {popularity?.toFixed(1)}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            pb: 2,
          }}
        >
         
  
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <ExplicitIcon color="primary" fontSize="small" />
            <Typography variant="body2" fontWeight={500}>
              {adult}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <HowToRegIcon color="primary" fontSize="small" />
            <Typography variant="body2" fontWeight={500}>
              {vote_count}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

import { Card, CardMedia, Typography, Box } from "@mui/material";
import { useState } from "react";
import StatusChip from "../../../components/utils/StatusChip";
import type { GameType } from "../../../types/gameType";
import { useGoTo } from "../../../hooks/useGoTo";

interface CardGameView{
    game: GameType;
}

export default function GameCard( { game } : CardGameView) {
  const goTo = useGoTo()
  const { name, type, price, background, context } = game;
  const [hover, setHover] = useState(false);
  const [purchased] = useState(false);

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0px 0px 5px rgb(0,0,0,0.1)",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(!hover)}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={background}
          alt={name}
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            transform: hover ? "scale(1.05)" : "scale(1)",
            borderRadius: 3,
          }}
        />
        <Box
          onClick={() => goTo(game._id)}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.4s ease",
            color: "white",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
            {context ? context : "no hay"}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }} color='#596d80'>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ${price}
        </Typography>
      </Box>

      <Box sx={{p: 1, display: "flex", justifyContent: "end"}}>
        <StatusChip type={type} purchased={purchased}/>
      </Box>
    </Card>
  );
}

import {
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	CardMedia,
} from "@mui/material";

import "./card.css";

const CardProducts = ({ products }) => {
	return (
		<Box>
		  <Grid container spacing={3} mt={3}>
        {products.length > 0 &&
          products.map(({ name,categoria,imagen,precio }) => (
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia
                  component="img"
                  width={200}
                  height={300}
                  image={imagen}
                />
                <CardContent>
                  <Typography variant="body1">Producto:{name}</Typography>
                  <Typography variant="body1">Categoria:{categoria}</Typography>
                  <Typography variant="body1">s/.{precio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
		</Box>
	);
};

export default CardProducts;

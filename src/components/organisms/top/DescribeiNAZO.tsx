import { Grid, Typography } from "@mui/material";
import { FC } from "react";

type DescribeiNAZOProps = {};

const DescribeiNAZO: FC<DescribeiNAZOProps> = () => {
  return (
    <Grid item>
      <Typography align="center" variant="h3" sx={{ m: "5rem 0" }}>
        <Typography
          component="span"
          variant="h2"
          sx={{
            fontWeight: "bold",
            textDecoration: "underline",
            color: "primary.main",
          }}
        >
          iNAZO
        </Typography>
        とは？
      </Typography>
      <Typography variant="h6" align="center">
        北大が公開している成績分布データをより扱いやすくしました。
        <br />
        <br />
        受けたい講義の過去の成績分布が知りたい <br />
        気になる複数の講義の成績分布を比較したい <br />
        自分が受講した講義の成績分布を知りたい <br />
        そんなとき、あなたをお手伝いします。 <br />
        <br />
        iNAZOを使って取りたい成績をあなたのものにしよう。 <br />
      </Typography>
    </Grid>
  );
};

export default DescribeiNAZO;

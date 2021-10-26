import React from "react";
import loader from "views/assets/images/loader.svg"

type Prop = React.HTMLAttributes<HTMLDivElement>

export const CircularProgress: React.FC<Prop> = ({ className }) => <div className={`loader ${className}`}>
  <img src={loader} alt="loader" />
</div>;

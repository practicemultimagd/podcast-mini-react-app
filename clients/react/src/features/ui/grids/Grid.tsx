import { Children, Fragment, ReactNode } from "react";
import { GridSkeleton } from "../skeletons/GridSkeleton";

type Props = {
  children: ReactNode;
  loading?: boolean;
};

export const Grid = ({ children, loading }: Props) => {
  return !loading ? (
    <div className={`grid grid-cols-1 gap-8 pt-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4`}>
      {Children.map(children, (child, key) => (
        <Fragment key={key}>{child}</Fragment>
      ))}
    </div>
  ) : (
    <GridSkeleton />
  );
};

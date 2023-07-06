import classNames from "classnames";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {}

export default function Container({ children }: ContainerProps) {
  return (
    <div className={classNames(`mx-6 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-32`)}>
      {children}
    </div>
  );
}

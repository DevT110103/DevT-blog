import './GlobalStyles.scss';

interface PropsType {
  children: React.ReactNode;
}

function GlobalStyles(props: PropsType) {
  const { children } = props;

  return <div className="wrapper">{children}</div>;
}

export default GlobalStyles;

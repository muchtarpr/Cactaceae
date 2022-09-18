import styles from "../../../../../public/styles/Home.module.css";
import { HeadComponent, Header, Footer } from "..";

type Props = {
  children?: JSX.Element;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <HeadComponent title="Cactaceae" />
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default Wrapper;

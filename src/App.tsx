import { observer } from "mobx-react";
import React from "react";
import * as styles from "./styles";
import Button from "./components/system/Button/Button";
import Card from "./components/common/Card/Card";
import Header from "./components/common/Header/Header";
import { useStores } from "./stores";

interface Props {}

const App = (props: Props): React.ReactElement => {
  const { counterStore } = useStores();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className={styles.appContainerClassName}>
        <Card className={styles.cardClassName}>
          <h1 className={styles.titleClassName}>MobX Counter</h1>
          <p className={styles.countClassName}>{counterStore.count}</p>
          <div className={styles.buttonContainerClassName}>
            <Button
              onClick={counterStore.decrement}
              variant="secondary"
              size="large"
            >
              -
            </Button>
            <Button
              onClick={counterStore.increment}
              variant="primary"
              size="large"
            >
              +
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default observer(App);

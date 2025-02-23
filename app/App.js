import MainStack from "../Src/Stacks/MainStack";
import { Provider } from "../Src/Context/Provider";
export default function App() {
  return (
    <Provider>
      <MainStack />
    </Provider>
  );
}

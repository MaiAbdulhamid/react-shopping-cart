import router, { setRouterConfigurations } from "@mongez/react-router";
import SuccessPage from "./pages/SuccessPage";
import Home from "./pages/Home";
import Root from "./layout/Root";
setRouterConfigurations({
  rootComponent: Root
})
router.add("/", Home);
router.add("/success", SuccessPage);

router.scan();

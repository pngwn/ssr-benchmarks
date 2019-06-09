import { createElement } from "react";
import { renderToString } from "react-dom/server";
import Skeleton from "./skeleton";

const App = Skeleton(createElement);

module.exports = () => renderToString(createElement(App));

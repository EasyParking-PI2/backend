import { group, sleep } from "k6";
import loginScenario from "./scenarios/loginScenario.js";

export let options = {
  stages: [
    { target: 10, duration: "30s" },
    { target: 20, duration: "30s" },
    { target: 0, duration: "5s" }
  ],
  thresholds: {
    post_login_duration: ["max<1000"],
    post_login_concurrency: ["p(95)<10"]
  }
}

export default () => {

  group("Endpoint /api/auth/login", () => {
    loginScenario();
  });

  sleep(1);
}
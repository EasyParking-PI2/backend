import { check, fail, sleep } from "k6";
import http from "k6/http";
import { Trend } from "k6/metrics";


export let PostLoginDuration = new Trend("post_create_vaga_duration");
export let PostLoginRate = new Trend("post_create_vaga_rate");
export let PostLoginConcurrency = new Trend("post_create_vaga_concurrency");

export let options = {
  ext:{
    loadimpact: {
      projectID: 3710536
    }
  },
  stages: [
    { target: 10, duration: "30s" },
    { target: 20, duration: "30s" },
    { target: 0, duration: "5s" }
  ],
  thresholds: {
    post_create_vaga_duration: ["max<1000"],
    post_create_vaga_concurrency: ["p(95)<10"]
  }
}

export default function(){

  let random = Math.floor(Math.random() * 100000);
  let res = http.post('http://localhost:5000/api/vagas', {
    numero: random,
    categoria: 'carro'
  }, {
    headers: {
      'Authorization': 'Bearer ' + __ENV.TOKEN
    }
  });


  PostLoginDuration.add(res.timings.duration);
  PostLoginConcurrency.add(1);

  let durationMsg = "Max duration ${1000/1000}s"
  if(!check(res, { 'max duration': (r) => r.timings.duration < 1000 })){
    fail(durationMsg);
  }

  sleep(1);
}
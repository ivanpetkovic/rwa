promeni u tsconfig.json "target": "es6", da ne bude es5, inace nemas Promise

za top level await treba opet da se menja tsconfig:
    "module": "esnext",
    "target": "es2017",
kao i webpack:
 experiments: {
    topLevelAwait: true
  }
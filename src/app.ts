import clientSdk from 'koa-rpc'

clientSdk.getCandidate({
  candidateId: 1235678
}).then((result) => console.log(result.data))
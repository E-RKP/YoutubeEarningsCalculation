let visual = prompt ('inserisci visual')
let settore = prompt ('inserisci settore')
let settore1 = settore.toLowerCase()
let lordov= visual/1000
switch (settore1){

  case 'finanza':{
    let lordof = lordov*5.5
    console.log(`Tolto le tasse, guadagnerai ${(lordof/4)*3} euro`)
  }
  break;

  case 'vlog':
  case 'gaming':
  case 'food':{
    let lordof = lordov*3.5
    console.log(`Tolto le tasse, guadagnerai ${(lordof/4)*3} euro`)
  }
  break;

  default:{
    let lordof = lordov*2
    console.log(`Tolto le tasse, guadagnerai ${(lordof/4)*3} euro`)
  }
}


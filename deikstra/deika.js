const SIZE = 6;
function start() {

  let a = [[0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]];


  let d = [];
  let v = [];
  let temp;
  let minindex, min;

  for (let i = 0; i<SIZE; i++)
  {
    a[i][i] = 0;
    for (let j = i + 1; j<SIZE; j++) {
      temp = prompt("Введите расстояние " + (i+1) + " - " + (j+1) + ": ");
      a[i][j] = parseInt(temp, 10);

      a[j][i] = parseInt(temp, 10);

    }
  }



  for(let i = 0; i < SIZE; i++){
    d[i] = 9999;
    v[i] = 1;
  }

  d[0] = 0;

  do{
    minindex = 9999;
    min = 9999;

    for(let i = 0; i <SIZE; i++)
    {
      if((v[i] == 1) && (d[i] < min))
      {
        min = d[i];
        minindex = i;
      }
    }


    if(minindex != 9999)
    {
      for(let i = 0; i < SIZE; i++){
        if(a[minindex][i] > 0)
        {
          temp = min + a[minindex][i];
          if(temp < d[i])
          {
            d[i] = temp;
          }
        }
      }
      v[minindex] = 0;
    }
  }while(minindex < 9999);


  console.log("Вывод кратчайшего пути: ");

  //Путь


  let ver = [];
  let end = 4;
  ver[0] = end + 1;
  let k = 1;
  let weight = d[end];

  while (end > 0)
  {
    for(let i=0; i<SIZE; i++)
      if (a[end][i] != 0)
      {
        let temp = weight - a[end][i];
        if (temp == d[i])
        {
          weight = temp;
          end = i;
          ver[k] = i + 1;
          k++;
        }
      }
  }

  for(let i = k-1; i>=0; i--){
    console.log(ver[i]);

  }


}

start();

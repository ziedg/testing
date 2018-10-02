const culc_sequence= () => {
  let sequence =[]

let seq_str='';

    seq_str=process.argv[2]
    if(!seq_str){
      console.info('enter a valid input ...');
      return;
    }
    sequence=seq_str.split(',');
    


let k=0;
while(k < sequence.length)
{
  sequence.splice(k,1,Number(sequence[k]))
  k++
}


  //its a function  that culculate the number of one in a sequence
  const calc_one = (sequence) => {
    let nb = 0;
    let arr = sequence;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        nb++;
      } else {
        break;
      }
    }

    return nb;
  };

  step = 0;
  maxLength = 0;
  positionOfMaxLength = 0;

  for (let j = 0; j <= sequence.length; j++) {
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] === 0) {
        sequence.splice(i, 1, 1);

        let seq_length = calc_one(sequence);
        console.log(
          ` length of sequence  ${seq_length}   : at index ${i + step}`
        );

        if (seq_length > maxLength) {
          maxLength = seq_length;
          positionOfMaxLength = i + step;
        }
        sequence.splice(i, 1, 0);
        step += sequence.slice(0, i).length + 1;
        sequence = sequence.slice(i + 1);
        break;
      }
    }

    
  }

  return {
    maxLength,
    positionOfMaxLength
  };
};




console.log("max sequence is ",  culc_sequence());

const keycodeFucntion = (e) => {
  const insert = document.getElementById('conatainer');
  const keyCode = document.getElementById('smallKeycode');
  const key = document.getElementById('smallkey');
  const code = document.getElementById('smallCode');

  const keyObjects = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };
  
  switch(key){
    case 'e.key':
        key.textContent = key

  }

   
};

window.addEventListener('keydown', keycodeFucntion);

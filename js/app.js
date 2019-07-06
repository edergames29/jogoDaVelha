var botao = [];
for( var cont = 1;cont<10;cont++ ){
      
    botao.push( document.getElementById( String( cont ) ) )
}


	function clicou(n) {
	if (n != "X" && n != 'O' && !verificar_vitorias("X") && !verificar_vitorias("O")){
			 var index  = n-1;

			console.log(n)
			//body.style.background-color = 'red'
			botao[ index ].value = 'X'

		    verificar_vitorias("X") ?  window.alert('vc venceu!') : timer();
			
            
		     
	}else{

      window.alert('Já selecionado!')

	}

	}

//


	function numeroAleatorio(){
		return Math.floor(Math.random()*9)
	}

//

	function timer(){

		var aleatorio = numeroAleatorio()
		var index  = aleatorio;

		console.log(aleatorio)
        
        var fim = botao.some( function(item){
              
              return  item.value != "X" &&  item.value != "O";

        } )


       if( botao[ index ].value !='X' &&  botao[ index ].value != 'O'){
		console.log('Passou no bola'+aleatorio)
	
			 
			 console.log(aleatorio)
			 //body.style.background-color = 'blue'
			 botao[ index ].value = 'O'
			 if ( verificar_vitorias("O") ){
             
                window.alert('vc Perdeu!')
			 }  
		}
		else{
		     fim ? timer() : "";
        } 

		
	}
//
function verificar_vitorias(jogador){
      const barra01 =(jogador)=>botao[0].value == jogador && botao[1].value == jogador && botao[2].value == jogador;
	  const barra02 =(jogador)=>botao[3].value == jogador && botao[4].value == jogador && botao[5].value == jogador;
      const barra03 =(jogador)=>botao[6].value == jogador && botao[7].value == jogador && botao[8].value == jogador;
	  const torre01 =(jogador)=>botao[0].value == jogador && botao[3].value == jogador && botao[6].value == jogador;
      const torre02 =(jogador)=>botao[1].value == jogador && botao[4].value == jogador && botao[7].value == jogador;
	  const torre03 =(jogador)=>botao[2].value == jogador && botao[5].value == jogador && botao[8].value == jogador;
      const diagonal01=(jogador)=>botao[0].value == jogador && botao[4].value == jogador && botao[8].value == jogador;
	  const diagonal02=(jogador)=>botao[2].value == jogador && botao[4].value == jogador && botao[6].value == jogador;
	 //
	  const barras =(jogador)=>barra01(jogador) || barra02(jogador) || barra03(jogador);
	  const torres =(jogador)=>torre01(jogador) || torre02(jogador) || torre03(jogador);
	  const diagonals =(jogador)=>diagonal01(jogador) || diagonal02(jogador); 
	 //
	  return barras(jogador) || torres(jogador)  || diagonals(jogador);
}
		
	//nav con botones 
	function iniciar () {
		//pongo a la escucha a los botones
		boton1=document.getElementById('inicia1');
		boton2=document.getElementById('inicia2');
		boton3=document.getElementById('inicia3');
		
		boton1.addEventListener('click',accion,false);
		boton2.addEventListener('click',accion,false);
		boton3.addEventListener('click',accion,false);
		
	}
	//creo un objeto para poder ingresar desde dentro de la funcion(para poder agregarle)
	var x={x1:'0'};var y={y1:'0'};var z={z1:'0'};
	function accion (e) {
		// body...
		//pongo ala escucha a los ul(submenu)
		menu1=document.getElementById('submenu1');
		menu2=document.getElementById('submenu2');
		menu3=document.getElementById('submenu3');
		//para saber que ancho es 
		width=window.innerWidth;
		//condiciones de tamaño para los tres tipos de nav
		if(width<=400){
			//un objeto para limpiar los eventos de boton
			window.onresize=function(){
			limpiar();

			//sumo uno al los objetos para q los botones esteen a la escucha nuevamente
			aumentarX1Y1Z1();
		}

		//eventos multiples
		if(e.target.id=='inicia1'){
			x.x1++;
			
				if (x.x1%2!=0) {
			//estilos para los ul o submenus
			estilosSubmenu(1,'relative','0px');
			//encaso de que algun boton estea activado
			aumentarY1Z1();
		}else{
			
			// era para limpiar si un boton esta activado
			limpiar();
			aumentarY1Z1();
		}//aqui es lo mismo para todos los botones
		}else if(e.target.id=='inicia2'){
			y.y1++;
				
				if (y.y1%2!=0) {
			estilosSubmenu(2,'relative','0px');
			aumentarX1Z1();

		}else{
			limpiar();
			aumentarX1Z1();
		}//igual
		}else if(e.target.id=='inicia3'){
			z.z1++;
				
				if (z.z1%2!=0) {
			
			estilosSubmenu(3,'relative','0px');
			aumentarX1Y1();
		}else{
			limpiar();
			aumentarX1Y1();
			
		}
		}
		//fin del else de 400
	}else if(width>400 && width<=714){
		//es lo mismo que lo anterior solo varia en el estilo de relative a absolute
		window.onresize=function(){
			limpiar();
			//para desactivar los botones que esten presiondos
			aumentarX1Y1Z1();

		}
		//medida de pantalla mayor 450px
		if(e.target.id=='inicia1'){
			x.x1++;
			
				if (x.x1%2!=0) {
			estilosSubmenu(1,'absolute','200px');
			aumentarY1Z1();
		}else{
			limpiar();
			aumentarY1Z1();
			
		}
		}else if(e.target.id=='inicia2'){
			y.y1++;
				
				if (y.y1%2!=0) {
			estilosSubmenu(2,'absolute','200px');
			aumentarX1Z1();
		}else{			
			limpiar();
			aumentarX1Z1();	
		}

		}else if(e.target.id=='inicia3'){
			z.z1++;
				
				if (z.z1%2!=0) {
			
			estilosSubmenu(3,'absolute','200px');
			aumentarX1Y1();
		}else{
			limpiar();
			aumentarX1Y1();
			
		}
		}
		//fin del tamaño 400 a 1070
	}else if(width>714){
		//este es lo mismo que lo anterio solo varia en el tamaño del styletop 240px
		window.onresize=function(){
			limpiar();
			aumentarX1Y1Z1();
		}

			//medida de pantalla mayor 930px
		if(e.target.id=='inicia1'){
			x.x1++;
			
				if (x.x1%2!=0) {

			estilosSubmenu(1,'absolute','100px');
			aumentarY1Z1();
		}else{

			limpiar();
			aumentarY1Z1();
			
		}
		}else if(e.target.id=='inicia2'){
			y.y1++;
				
				if (y.y1%2!=0) {
			estilosSubmenu(2,'absolute','100px');	
			aumentarX1Z1();

		}else{
			limpiar();
			aumentarX1Z1();	
		}
		}else if(e.target.id=='inicia3'){
			z.z1++;
				
				if (z.z1%2!=0) {
			
			estilosSubmenu(3,'absolute','100px');
			
			aumentarX1Y1();

		}else{

			limpiar();	
			aumentarX1Y1();
			
		}
		}

	}

	}//cierre de funcion

	function estilosSubmenu (buton,pos,topp){
				if (buton==1) {
					menu1.style.display='block';
					menu1.style.position=pos;
					menu1.style.top=topp;
					menu2.style.display='none';
					menu3.style.display='none';
				}
				else if(buton==2){
					menu2.style.display='block';
					menu2.style.position=pos;
					menu2.style.top=topp;
					
					menu1.style.display='none';
					menu3.style.display='none';
				}
				else if(buton==3){
					menu3.style.display='block';
					menu3.style.position=pos;
					menu3.style.top=topp;
					
					menu1.style.display='none';
					menu2.style.display='none';
				}
			}

/*funcion para limpiar*/
	
	function limpiar (){
		menu1.style.display='none';
		menu2.style.display='none';
		menu3.style.display='none';
	}
	function aumentarX1Y1 (){
			if(x.x1%2!=0){
				x.x1++;
			}
			if(y.y1%2!=0){
				y.y1++;
			}
	}
	function aumentarX1Z1 (){
			if(x.x1%2!=0){
				x.x1++;
			}
			if(z.z1%2!=0){
				z.z1++;
			}
	}

	function aumentarY1Z1 (){
			if(y.y1%2!=0){
				y.y1++;
			}
			if(z.z1%2!=0){
				z.z1++;
			}
	}
	function aumentarX1Y1Z1 (){
			if (x.x1%2!=0) {
				x.x1++;
				
			}else if(y.y1%2!=0) {
				y.y1++;
			}else if(z.z1%2!=0) {
				z.z1++;
			}
	}
window.addEventListener('load',iniciar,false);

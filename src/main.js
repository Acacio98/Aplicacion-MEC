

async function getAdvantageEdgeusers() {

    const res = await fetch('https://192.168.18.67/prueba/location/v2/queries/users');
    const data = await res.json();

 
    const userList = data.userList.user;
    //codigo de auditoria de los datos   
    console.log({userList});

    //codigo de creación en el html5    
    userList.forEach(userList => {
    const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
	movieContainer.addEventListener('click', () => {
		location.hash = '#movie=' + userList.accessPointId;
});

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt',userList.accessPointId);

    const isp = userList.accessPointId.slice(-3)

    if (isp == 'tar') 
        {
        movieImg.setAttribute(
               'src',
            'https://seeklogo.com/images/M/movistar-2017-logo-E5302D14EF-seeklogo.com.png',
         );
        }else if (isp == 'nge')       
        {
            movieImg.setAttribute(
                   'src',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/474px-Orange_logo.svg.png',
             );
            } else if (isp == 'one')       
            {
                movieImg.setAttribute(
                       'src',
                    'https://brandemia.org/sites/default/files/inline/images/vodafone_logo_portada.jpg',
                 );
                } else if (isp == 'vil')       
                {
                    movieImg.setAttribute(
                           'src',
                        'https://www.masmovil.es/assets/images/metas/logo_masmovil.png',
                     );
                    }
    
    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
    


});
};

getAdvantageEdgeusers();

async function getAdvantageEdgezone() {
    const res = await fetch('https://192.168.18.67/prueba/location/v2/queries/zones');
    const data = await res.json();

    const zoneList = data.zoneList.zone;
    //codigo de auditoria de los datos   
    console.log(zoneList);


    zoneList.forEach( zoneList => {
        const trendingPreviewZoneContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')
    
        const zoneContainer = document.createElement('div');
        zoneContainer.classList.add('category-container');
        
        const texto = zoneList.zoneId;
        const isp = zoneList.zoneId.slice(-3)

    if (isp == 'tar') 
        {
            var color = 'id80'
        }else if (isp == 'nge')       
        {
            var color = 'id337'
             
            } else if (isp == 'one')       
            {
                var color = 'id12'
                 
                } else        
                {
                    var color = 'id28'
                     
                    }
        //const color = 'id18'

        const zoneH3 = document.createElement('h3');
        zoneH3.classList.add('category-title');
        zoneH3.setAttribute('id',color);
        zoneH3.innerHTML = texto;
		zoneH3.addEventListener('click', () => {
		location.hash = '#category=' + zoneList.zoneId;
	 	});
    
    
        zoneContainer.appendChild(zoneH3);
        trendingPreviewZoneContainer.appendChild(zoneContainer);
        
    
    
    });
    };

getAdvantageEdgezone();




async function   getMoviesByCategory(categoryId){
    const res = await fetch('https://192.168.18.67/prueba/location/v2/queries/zones/'+categoryId);
    const data = await res.json(); 
    const zoneList = data.zoneInfo;
}


async function getMoviesBySearch(query){
    const res = await fetch('https://192.168.18.67/prueba/location/v2/queries/zones/' + query + '/accessPoints')
	///service/myresource/user/{user}/bicycles/{bicycleId}
    const data = await res.json();

    const userList = data.userList.user;
    //codigo de auditoria de los datos   
    console.log({userList});

    //codigo de creación en el html5    
    userList.forEach(userList => {
    const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
	movieContainer.addEventListener('click', () => {
		location.hash = '#movie=' + userList.accessPointId;
	});

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt',userList.accessPointId);

    const isp = userList.accessPointId.slice(-3)

    if (isp == 'tar') 
        {
        movieImg.setAttribute(
               'src',
            'https://seeklogo.com/images/M/movistar-2017-logo-E5302D14EF-seeklogo.com.png',
         );
        }else if (isp == 'nge')       
        {
            movieImg.setAttribute(
                   'src',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/474px-Orange_logo.svg.png',
             );
            } else if (isp == 'one')       
            {
                movieImg.setAttribute(
                       'src',
                    'https://brandemia.org/sites/default/files/inline/images/vodafone_logo_portada.jpg',
                 );
                } else if (isp == 'vil')       
                {
                    movieImg.setAttribute(
                           'src',
                        'https://www.masmovil.es/assets/images/metas/logo_masmovil.png',
                     );
                    }
    
 

    

    
    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
    


    });
    };
	
async function getMovieById(id){
    const res = await fetch('https://192.168.18.67/prueba/location/v2/queries/users?accessPointId=' + id);

    const datau = await res.json();
    
    console.log(datau)

    const suserList = datau;
    //codigo de auditoria de los datos   
	
	console.log('jola')
    console.log(suserList);
    
    const isp = suserList.userList
    const sisp = isp.user.accessPointId
    
    console.log(sisp);
    
   
    
   
   
    if (sisp == 'tar') 
        {
         var  movieImgURL = 'https://seeklogo.com/images/M/movistar-2017-logo-E5302D14EF-seeklogo.com.png'
         
        }else if (sisp == 'nge')       
        {
           var  movieImgURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/474px-Orange_logo.svg.png'
             
            } else if (sisp == 'one')       
            {
                var  movieImgURL = 'https://brandemia.org/sites/default/files/inline/images/vodafone_logo_portada.jpg'
                 
                } else if (sisp == 'vil')       
                {
                    var  movieImgURL ='https://www.masmovil.es/assets/images/metas/logo_masmovil.png'
                     
                    } else        
              		  {
                    var  movieImgURL ='https://www.masmovil.es/assets/images/metas/logo_masmovil.png'}
 
	headerSection.style.background = `url(${movieImgURL})`;
	 /*  
	const osp = userList.adress.str.substring(
    str.lastIndexOf(".") + 1, 
    str.lastIndexOf("."))


    if (osp == '100') 
        {
         const terminal = 'Persona'
         
        }else if (isp == '10.')       
        {
           const terminal = 'Coche'
             
            } 
    
	headerSection.style.background = `url(${terminalImgURL})`;
*/

 /*  
	const mec = userList.zoneId.slice(-3)

    if (ser == 'tar') 
        {
         const mec = 'MEC Movistar'
         
        }else if (ser == 'one')       
        {
           const mec = 'MEC Vodafone'
             
            }else if (ser == 'one')       
             {
             const mec = 'MEC Orange'
             
             } 
    
	headerSection.style.background = `url(${terminalImgURL})`;
*/

    //codigo de creación en el html5    
	movieDetailTitle.textContent = 'Terminal: ' + '10.100.0.2'//suserList.address
	movieDetailPoA.textContent = 'PoA Conectado: ' + 'poa1-4g11-masmovil'//UserLists.accesspointId
    movieDetailZone.textContent = ' Zona: ' + ' ronda-masmóvil' //suserList.zoneId
    movieDetailPosition.textContent = 'Posición: ' + '37.16853 lat.' + ' -3.606349 long.' //suserList.latitude //suserList.longitude
    movieDetailVel.textContent = 'Vel: ' + ' 9 m/s' 
    movieDetailTipo.textContent = 'Tipo: ' + 'Persona' //terminal
	movieDetailMec.textContent = 'Servidor: ' + 'MEC MasMóvil' //mec

}
    
    
	

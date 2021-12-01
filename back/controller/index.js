import fetch from 'cross-fetch';

export const probando =  async (req,res) => {

    try{
    const nombre = req.params.nombre

    
    if(Number(nombre))throw new Error('debe ingresar un nombre')

    const response = await fetch(process.env.URL + `/${nombre}`);



    if (response.status >= 400) throw new Error("El pokemon no existe");
      


    const games = await response.json();

  


    let obj = {
        nombre: games.name,
        imagen: games.sprites.front_default
    }

    res.status(200).json(obj)
    }catch(error){
        res.status(400).json({error:  error.message })
    }


}

export const test = (req,res) => {

   res.status(200).json({'message': 'holaaa'})
}
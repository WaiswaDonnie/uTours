
import {details} from '../../../data.json'

export default function handler({query:{id}},res,req){
    

    const filtered =  details.filter(detail => detail.id === id);

    if(filtered.length > 0) {
        res.status(200).json(filtered[0]);
    }else{
        res.status(400).json({"messafe":`Could not fetch data of ${id}.It might have been removed or broken.`})
    }


}
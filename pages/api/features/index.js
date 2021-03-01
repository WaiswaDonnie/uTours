import {features} from '../../../features.json';

export default function featuresHandler(req,res){

    res.status(200).json(features)

}
import { connectDB } from "@/util/database";
import {ObjectId} from 'mongodb';

export default async function Detail(props){

    const db = (await connectDB).db("forum");
    //let result = await db.collection("post").findOne({_id: new ObjectId('6461d86497bc4fbd3e9f9484')});
    let result = await db.collection("post").findOne({_id: new ObjectId(props.params.id)});

    console.log(result);
    console.log(props);
    return (
        <div>
            <div>상세페이지</div>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}
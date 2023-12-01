import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "./info";

const CarDetail = () => {

    const { id } = useParams();
    console.log(id);
    const [infos, setInfos] = useState([]);
    console.log(infos);

    useEffect(() => {
        fetch('/cars.json')
            .then(res => res.json())
            .then(data => {
                const filteredInfo = id ? data.filter(detail => detail.id === id) : data;
                console.log(filteredInfo);
                setInfos(filteredInfo);
            })
    }, [])

    return (
        <div>
            {
                infos.map(info => <Info key={info.id} info={info}></Info>)
            }
            {infos.length}
        </div>
    );
};

export default CarDetail;

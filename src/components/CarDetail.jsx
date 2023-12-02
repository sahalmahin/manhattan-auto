import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "./info";

const CarDetail = () => {

    const { id } = useParams();
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        fetch('/cars.json')
            .then(res => res.json())
            .then(data => {
                const filteredInfo = id ? data.filter(detail => detail.id === id) : data;
                setInfos(filteredInfo);
            })
    }, [])

    return (
        <div>
            {
                infos.map(info => <Info key={info.id} info={info}></Info>)
            }
        </div>
    );
};

export default CarDetail;

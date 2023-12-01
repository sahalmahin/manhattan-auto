import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

const DetailPage = () => {

    const { id } = useParams();
    const [carDetail, setCarDetail] = useState([]);

    useEffect(() => {
        fetch('/cars.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = id ? data.filter(detail => detail.id === id) : data;
                setCarDetail(filteredData);
            })
    }, [])

    return (
        <div>
            {
                carDetail.map(detail => <Detail key={detail.id} detail={detail}></Detail>)
            }
        </div>
    );
};

export default DetailPage;
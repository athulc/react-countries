import { useEffect, useState } from "react";

export const useFilter = (data, callback) => {
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data.filter(callback))
    }, [])

    return [filteredData, setFilteredData]
}
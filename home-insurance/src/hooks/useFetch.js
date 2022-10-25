import { useQuery } from "react-query";

const fetchData = async ({ queryKey }) => {
  const response = await fetch(queryKey[1]);  
  return await response?.json();
};

const useFetch = (type) => {
  let url ='';
  const {REACT_APP_HOST_URL} = process.env; 
  url = `${REACT_APP_HOST_URL}${type}`; 
  const {data, status } = useQuery(["fetchData", url], fetchData);
  return { data, status};
};

export default useFetch;
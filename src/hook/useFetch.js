import { useState, useEffect } from 'react';

const useFetch = (callback, url) => {
  // 상태 정의
  const [loading, setLoading] = useState(false);

  const fetchInitialData = () => {
    setLoading(true);
    const initialData = url;
    // const response = await fetch(url);
    // const initialData = await response.json();
   
    // callback(JSON.parse(todosLS));
    // const initalData = (data === '' ? [] : JSON.parse(data));
    setTimeout(()=> {
      callback(initialData);
    }, 1000);
    setLoading(false);

    // json 서버 띄우기: json-server ./data/todo.json --port 4000 --delay 1000
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
}

export default useFetch;
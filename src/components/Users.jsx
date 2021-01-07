import {useState, useEffect} from 'react';
import List from './List';
import Details from './Details';

function Users () {
    const [usersList, setUsersList] = useState(null);
    const [selected, setSelected] = useState({});
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const id = selected.id;
        if (id) {
            (async () => {
               const response = await fetchData(id);
               setDetail(response);
            })()
        } else {
            (async () => {
               const response = await fetchData('users');
               setUsersList(response)
            })()
        }
        
        
    }, [selected]);

    const fetchData = async (id) => {
        setLoading(true);
        const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
        let reader = await response.body.getReader();
        let decoder = new TextDecoder();
        let data = '';
        while(true) {
            let { done, value } = await reader.read();
            data += decoder.decode(value);
            if (done) break;
        }
        setLoading(false);
        return JSON.parse(data);
    }


    const onClickItem = (e) => {
        setSelected(usersList.find(el => el.id === e));
    }

    return (
        <div>
            {usersList && <List data={usersList} onClickItem={onClickItem} />}
            {!loading && <Details info={detail} />}
            {loading && <p>Загрузка...</p>}
        </div>

    )
}

export default Users;
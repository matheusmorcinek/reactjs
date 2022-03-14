import React, { useState } from "react";
import lodash from 'lodash';

const ITEMS_API_URL = 'http://localhost:3000/api/items';
const DEBOUNCE_DELAY = 500;

const fetchItems = async (value, setItems, setLoading) => {
  setItems([]);
  setLoading(true);

  try {

    const { data } = await axios(`${ITEMS_API_URL}?q=${value}`);
    setItems(data);
  } catch (error) {

    console.error(error.message);
  }

  setLoading(false);
};

export default Autocomplete = () => {

    const [loading, setLoading] = useState(false);
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);

    const delayedItemsFetch = useCallback(lodash.debounce(inputText => fetchItems(inputText, setItems, setLoading), DEBOUNCE_DELAY), []);

    const handleInputText = (event) => {
        setInputText(event.target.value);
        delayedItemsFetch(event.target.value);
    }

    const wrapperControlClassNames = classnames('control', { 'is-loading': loading });

    return (
        <div className="wrapper">
            <div className={wrapperControlClassNames}>
                <input
                    type="text"
                    className="input"
                    value={inputText}
                    onChange={handleInputText}
                />
            </div>
            {
                items.length > 0 && (
                    <div className="list is-hoverable" >
                        {
                            items.map(item => (
                                <a
                                    key={item}
                                    className="list-item"
                                    onClick={() => onSelectItem(item)}
                                >
                                    {item}
                                </a>)
                            )
                        }
                    </div>
                )
            }

        </div>
    );
}
import React,{useEffect, useState} from 'react';

function Menu({menuItems}) {

    const [listItems, setListItems] = useState(menuItems);

    function filterList(type){

        if(type === 'all'){
            setListItems(menuItems);
            return;
        }

        let updatedList= menuItems.filter((item)=>{
            if(item.category === type)
                return true;
            else
                return false;
        });

        setListItems(updatedList);
    }


    return (
        <div>
            <h1>
                <div>Our Menu</div>
                <p></p>
            </h1>
            <nav>
                <button onClick={()=>{filterList('all')}} >All</button>
                <button onClick={()=>{filterList('breakfast')}} >Breakfast</button>
                <button onClick={()=>{filterList('lunch')}} >Lunch</button>
                <button onClick={()=>{filterList('shakes')}} >Shakes</button>
            </nav>
            <div className='item-container'>
            {
                listItems.map(item => (
                    <div className='item'>
                        <img src={('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')}/>
                        <div className='content'>
                            <div className='header'>
                                <span>{item.title}</span>
                                <span>$ {item.price}</span>
                            </div>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default Menu;
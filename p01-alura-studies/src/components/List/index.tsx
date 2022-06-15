import React from 'react';

function List() {
    const taskList = [
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'Javascript',
            time: '01:00:00'
        },
        {
            task: 'Typescript',
            time: '03:00:00'
        }
    ]
    return (
        <aside>
            <h2>Estudos do Dia</h2>
            <ul>
                { taskList.map((item, index) => (
                    <li key={index}>
                        <h3>{ item.task }</h3>
                        <span>{ item.time }</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;
import React from 'react'
import { Item } from "../models/item"

interface TaskListProp {
    items: Item[]
}

export default function TaskList(props: TaskListProp): JSX.Element {
    return (
        <div>
            <h1>งานที่ต้องทำในวันนี้</h1>
            <ul>
                {props.items.map((element,index) => (
                    <li key={index}>{element.name}</li>
                ))}
            </ul>
        </div>
    );
}
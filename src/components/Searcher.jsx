import React from 'react';
import { Input } from "antd"; 

const Searcher = () => {
    return <Input.Search placeholder="Buscar.."
    allowClear
    enterButton="Search"
    size="large" />
}

export default Searcher;
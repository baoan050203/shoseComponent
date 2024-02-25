import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import ExShoeStore from './components/Props/ExShoeStore/ExShoeStore';
import ChangeColor from './components/StateDemoComponent/ChangeColor';
import ChangeCar from './components/StateDemoComponent/ChangeCar';
import clsx from 'clsx';
import HeaderLayout from './components/Headerlayout';
import HomeTemplate from './Template/HomeTemplate.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại function component , class component
root.render(
  <BrowserRouter>
    {/* Những thẻ nào để ngoài Routes thì luôn luôn được load lên */}
    {/* Thẻ Navlink (của react router dom) để di chuyển giữa các trang trong react */}
    {/* isActive sẽ trả về true khi router đó đang active, ngược lại sẽ trả về false */}

    <Routes>
      {/* localhost:3000/shoe-store */}

      <Route path="" element={<HomeTemplate />}>
        <Route path="trangChu" element={<div>Trang chủ</div>}></Route>
        <Route path="shoe-store" element={<ExShoeStore />}></Route>
        <Route path="bt-change-color" element={<ChangeColor />}></Route>
      <Route path="bt-change-car" element={<ChangeCar />}></Route>
      </Route>

      
    </Routes>
  </BrowserRouter>,
);

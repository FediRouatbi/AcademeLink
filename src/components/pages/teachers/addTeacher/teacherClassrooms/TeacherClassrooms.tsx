import React, { useState } from 'react';

import Item from './Item/Item';
const TeacherClassrooms = () => {
  const [classrooms, setClassrooms] = useState([]);

  return (
    <div>
      <Item  />
    </div>
  );
};

export default TeacherClassrooms;

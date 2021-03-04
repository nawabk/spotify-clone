import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { BASE_URL, getAuthHeader } from '../shared/shared';
import { useAuthDispatch, logout } from '../../context/auth-context';
import AlbumList from '../Album/AlbumList';

const Categories = () => {
  const dispatch = useAuthDispatch();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${BASE_URL}/browse/categories?country=IN`,
          getAuthHeader()
        );
        console.log(res.data);
        setCategories(res.data.categories);
      } catch (err) {
        if (err.response?.data?.error?.status === 401) {
          logout(dispatch);
        }
      }
    }
    fetchData();
  }, [dispatch]);
  return (
    categories && <AlbumList albums={categories.items} title="Categories" />
  );
};

export default Categories;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Checkbox } from "antd";
import Content from "../components/ReadMore";
import axios from "axios";
import PieChart from "../components/PieChart";
import Layout from "./../components/Layout/Layout";

import "../styles/Homepage.css";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 100000,
  headers: { "X-Custom-Header": "foobar" },
});

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await instance.get("/products/categories");
      if (data) {


        const dataArray = data.map((data) => {
          return { id: Math.floor(Math.random() * 1000), name: data };
        });

        setCategories(dataArray);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await instance.get(`/products`);
      setLoading(false);
      setProducts(data);
      setAllProducts(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // filter by cat
  const handleFilter = (value, id, name) => {
    let all = [...checked];
    if (value) {
      all.push(name);
    } else {
      all = all.filter((c) => c !== name);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      
      const { data } = await instance.get("/products/category/" + checked[0]);

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c.id}
                onChange={(e) => handleFilter(e.target.checked, c.id, c.name)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>

          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card md-2 m-2" key={p.id}>
                <img src={p.image} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.title}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    <Content data={p.description} />
                  </p>
                </div>
                <div className="piechart btn-white">
                  <PieChart data={allProducts}></PieChart>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="piechart btn btn-info ms-1">
        <PieChart></PieChart>
      </div>
    </Layout>
  );
};

export default HomePage;
